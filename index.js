
  const img = document.getElementById('img');
  // Load the model.
  mobilenet.load().then(model => {
    // Classify the image.
    model.classify(img).then(predictions => {
      document.getElementById('micro_out_div').innerText += predictions;
    });
  });


