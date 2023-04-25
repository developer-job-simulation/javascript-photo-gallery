import { JSDOM } from "jsdom";
import { setTimeout } from "timers/promises";
import { test } from "uvu";
import * as assert from "uvu/assert";
let filePath = "./src/index.html";

// Helpers

const hasAllClasses = (dom, id, classes) =>
  classes.every((val) => dom.window.document.getElementById(id).getAttribute("class").split(" ").includes(val));

const click = (dom, selector) =>
  dom.window.document.querySelector(selector).dispatchEvent(new dom.window.MouseEvent("click"));

// Tests

test("Issue #1: Add an event listener for each image in the gallery to show it in the modal when clicked", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(10); // let css load

  click(dom, ".image");

  const modal = dom.window.document.getElementById("modal");
  assert.is(modal.classList.contains("hidden"), false, "Modal should be visible after clicking an image");
});

test("Issue #2: Add event listeners for the prevBtn and nextBtn for modal navigation functionality", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(10); // let css load

  const images = dom.window.document.querySelectorAll(".image");
  const modalImage = dom.window.document.getElementById("modalImage");
  const prevBtn = dom.window.document.getElementById("prevBtn");
  const nextBtn = dom.window.document.getElementById("nextBtn");

  // Open the modal by clicking the first image
  click(dom, ".image");
  const initialModalImageSrc = modalImage.src;

  // Click next button
  click(dom, "#nextBtn");
  assert.is(
    modalImage.src !== initialModalImageSrc,
    true,
    "Modal image source should change after clicking next button"
  );

  // Click prev button
  click(dom, "#prevBtn");
  assert.is(
    modalImage.src === initialModalImageSrc,
    true,
    "Modal image source should return to the initial image after clicking prev button"
  );
});

test("Issue #3: modal close button functionality", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(10); // let css load

  const closeModal = () => click(dom, "#closeBtn");

  // Open the modal by clicking the first image
  click(dom, ".image");

  const modal = dom.window.document.getElementById("modal");
  assert.is(modal.classList.contains("hidden"), false, "Modal should be visible after clicking an image");

  // Close the modal using the close button
  closeModal();
  assert.is(modal.classList.contains("hidden"), true, "Modal should be hidden after clicking the close button");
});

test("Issue #3: modal closes when clicking outside content", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(10); // let css load

  const clickOutsideModal = () => {
    click(dom, "#modal");
  };

  // Open the modal by clicking the first image
  click(dom, ".image");

  const modal = dom.window.document.getElementById("modal");
  assert.is(modal.classList.contains("hidden"), false, "Modal should be visible after clicking an image");

  // Close the modal by clicking outside the modal content
  clickOutsideModal();

  assert.is(
    modal.classList.contains("hidden"),
    true,
    "Modal should be hidden after clicking outside the modal content"
  );
});

test("Issue #4: navigation buttons update based on currentImageIndex", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(10); // let css load

  const prevBtn = dom.window.document.getElementById("prevBtn");
  const nextBtn = dom.window.document.getElementById("nextBtn");
  const totalImages = dom.window.document.querySelectorAll(".image").length;

  // Open the modal by clicking the first image
  click(dom, ".image");

  // Check if the prevBtn is disabled when the first image is displayed
  assert.is(prevBtn.disabled, true, "prevBtn should be disabled when displaying the first image");

  // Click nextBtn to move to the second image
  click(dom, "#nextBtn");

  // Check if both buttons are enabled when displaying an image in the middle
  assert.is(prevBtn.disabled, false, "prevBtn should be enabled when displaying an image in the middle");
  assert.is(nextBtn.disabled, false, "nextBtn should be enabled when displaying an image in the middle");

  // Click nextBtn until the last image is displayed
  for (let i = 2; i < totalImages; i++) {
    click(dom, "#nextBtn");
  }

  // Check if the nextBtn is disabled when the last image is displayed
  assert.is(nextBtn.disabled, true, "nextBtn should be disabled when displaying the last image");
});

test.run();
