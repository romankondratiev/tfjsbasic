
  const img = document.getElementById('img');
  const img = document.getElementById('img');
  // Load the model.
  mobilenet.load().then(model => {
    // Classify the image.
    model.classify(img).then(predictions => {
      console.log('Predictions: ');
      console.log(predictions);
      console.log('obj', predictions);
      console.log('.toString', predictions.toString());
      console.log('String()', String(predictions));
      console.log('JSON.stringify',JSON.stringify(predictions));
    });
  });

