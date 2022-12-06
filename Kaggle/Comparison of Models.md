
LR is linear whereas RF is sum of piecewise function.  
LR needs regularization to avoid overfitting, but RF has regularization inbuilt.  
LR supports only regression and using link functions it can do classification via Logistic regression, RF supports classification and regression.  
LR can generate sparse models using L1 regularization, but RF needs tweaking to ignore features if the gain is very less.  
LR and RF, both have limited interpretation. The weights of LR can give you some details and similarly if the trees count is less, we can visualize and get an idea about the features gain.  
LR can work for high dimensional, but RF will not shine for high dimensional.