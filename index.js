  const img = document.getElementById('img');
  mobilenet.load().then(model => {
    model.classify(img).then(predictions => {
      console.log('Predictions: ');
      //console.log(predictions);
      console.log(JSON.stringify(predictions));
      if (predictions.hasOwnProperty("id")){
        console.log(predictions.id);
      }
    });
  });

