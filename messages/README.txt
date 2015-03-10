Andrea Compton
3/6/15
Comp20 Lab 6

1. to the best of my knowledge everything was implemented correctly
2. collaborated with alex salvatore
3. hours spent: 3

Is it possible to request data from a different origin or from your local machine?

Because we are using XMLHttpRequest we can request data from a different 
origin but the request will not succeed because of the same-origin policy
which maintains that requests will succeed only if they are made to the host
that served the original web page. This prevents cross-site request forgery 
attacks. This also restricts you from accessing the data from your local
machine as that would also be a security breach because your local machine
is a different origin.