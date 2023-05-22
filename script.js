   console.log("Test log");

   var projectId;
   var myAccessToken;

   getData();

   async function getData() {
    API = await TrimbleConnectWorkspace.connect(window.parent, (event, data) => {
       console.log("Event: ", event, data);
    });

    API.project.getProject().then(project => {
       console.log(project); // Trimble Connect project details
       projectId = project.id;
    });

    //Request for the access token.
    API.extension.requestPermission("accesstoken").then(accessToken => {
       //Current user access token or status: accessToken
       console.log(accessToken);
myAccessToken = accessToken;    
    });

    const propertyName = 'Propriété Test';
    const propertyValue = 'Test';
    const filter = `properties/${propertyName} eq null`;
    /*const filter = `properties/${propertyName} eq '${propertyValue}'`;*/
    const apiUrl = `https://pset-api.connect.trimble.com/propertyset/v1/projects/${projectId}/propertyset-instances?filter=${encodeURIComponent(filter)}`;

    fetch(apiUrl, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${myAccessToken}`
       },
    })
    .then(response => response.json())
    .then(data => {
       const propertySetInstances = data.data;
       // Use the propertySetInstances array to access the entities that match the filter
       console.log(propertySetInstances)
    });

   }
