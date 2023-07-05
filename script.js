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

   //  getData();

   //  async function getData() 
   //  {
   //    console.log("debut test: ");

   //    const responseModel = await API.viewer.getModels();
   //    const model = responseModel[2];
      
   //    console.log("response model: ", responseModel);
   //    console.log("modelId: ", model.id);

   //    // document.getElementById('test').innerHTML = model.name;

   //    //#region Get Forest

   //    const responseForest = await fetch(projectForestString, {
   //      method: 'GET',
   //      headers: {
   //          'Content-Type': 'application/json',
   //          'Authorization': `Bearer ${accessToken}`
   //      }
   //   });
     
   //   const responseForestJson = await responseForest.json();
     
   //   console.log("response Forest json: ", responseForestJson);
     
   //   //#endregion
     
   //   // Get Library Id
   //   const libId = responseForestJson.links[0].substring(8);
   //   console.log("libId: ", libId);

   //   //#region Forest Trees
     
   //   const responseForestTrees = await fetch(projectForestTreesString, {
   //      method: 'GET',
   //      headers: {
   //         'Content-Type': 'application/json',
   //         'Authorization': `Bearer ${accessToken}`
   //       }
   //    });
      
   //    const responseForestTreesJson = await responseForestTrees.json();
 
   //    console.log("responseForestTreesJson: ", responseForestTreesJson);
      
   //    //#endregion Forest Trees

   //   //#region Project Context Nodes
   //   const projectForestProjectContextString = projectForestTreesString.concat("/ProjectContext/nodes");
     
   //   const responseProjectContext = await fetch(projectForestProjectContextString, {
   //      method: 'GET',
   //      headers: {
   //         'Content-Type': 'application/json',
   //         'Authorization': `Bearer ${accessToken}`
   //       }
   //    });
      
   //    var ProjectContextJson = await responseProjectContext.json();
      
   //    console.log("ProjectContextNodes:", ProjectContextJson);
   //    //#endregion      

   //    //Create Library string for request
   //    const getLibString = `${psetBaseString}libs/${libId}`;

   //    //Create LibraryDefinition string for request
   //   const getLibDefsString = `${getLibString}/defs`;

   //   //#region Get Library
   //   const responseLib = await fetch(getLibString, {
   //      method: 'GET',
   //      headers: {
   //          'Content-Type': 'application/json',
   //          'Authorization': `Bearer ${accessToken}`
   //      }
   //   });

   //   console.log("get library:", await responseLib.json());
   //   //#endregion

   //   //#region Get Library Def
   //   const responseLibDefs = await fetch(getLibDefsString, {
   //      method: 'GET',
   //      headers: {
   //          'Content-Type': 'application/json',
   //          'Authorization': `Bearer ${accessToken}`
   //      }
   //   });

   //   const LibDefs = await responseLibDefs.json();

   //   console.log("library definitions: ", LibDefs);

   //   //#endregion

   //   // Display first library definition
   //   const firstLibDef = LibDefs.items[0];

   //   console.log("get first library def:", firstLibDef);

   //   const defId = firstLibDef.id;

   //   //#region Get model Entities
   //   // Create request to get model entities
   //    const modelInfoString = modelApiBaseString.concat(`models/${model.id}/entities`);
      
   //    const responseModelInfo =  await fetch(modelInfoString, {
   //       method: 'GET',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'Authorization': `Bearer ${accessToken}`
   //       }
   //    });

   //    let modelInfos = await responseModelInfo.json();

   //    let modelEntities = modelInfos.items;

   //    // console.log("modelEntities: ", modelEntities);
      
   //    //#endregion

   //    //#region PsetRequest test
   //    // Create frn link for first entity
   //    let entityFrnTest = `frn:entity:${modelEntities[0].id}`;

   //    let psetForEntityTestString = psetBaseString.concat(`psets/${entityFrnTest}`);

   //    let responseEntityPsetTest = await fetch(psetForEntityTestString, {
   //       method: 'GET',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'Authorization': `Bearer ${accessToken}`
   //       }
   //    });

   //    console.log("test PsetsRequests: ", await responseEntityPsetTest.json());
   //    //#endregion

   //    let entities = new Array();

   //    console.log("num: ", modelEntities.length);

   //    var entityId = modelEntities[655].id;

      

   //    // console.log("entity infos: ", entityInfo);

   // //    for (let index = 0; index < modelEntities.length; index++) {
   // //       let entityId = modelEntities[index].id
   // //       let entityFrn = `frn:entity:${entityId}`;

   // //       let psetForEntityString = psetBaseString.concat(`psets/${entityFrn}`);

   // //       const getEntityPsetByDefIdString = psetForEntityString.concat(`/${libId}/${defId}`);

   // //       if (index < 500){

   // //          var responseEntityPsetByDefIdPatch = await fetch(getEntityPsetByDefIdString, {
   // //             method: 'PATCH',
   // //             body: JSON.stringify({
   // //                "props": 
   // //                {
   // //                   "prop_fn1lmx6z7qwngdy1g7qubrlvmub416h3": "A1"
   // //                }
   // //             }),
   // //             headers: {
   // //                'Content-Type': 'application/json',
   // //                'Authorization': `Bearer ${accessToken}`
   // //             },
   // //          });
   // //       }else{
   // //           responseEntityPsetByDefIdPatch = await fetch(getEntityPsetByDefIdString, {
   // //             method: 'PATCH',
   // //             body: JSON.stringify({
   // //                "props": 
   // //                {
   // //                   "prop_fn1lmx6z7qwngdy1g7qubrlvmub416h3": "A2"
   // //                }
                  
   // //             }),
   // //             headers: {
   // //                'Content-Type': 'application/json',
   // //                'Authorization': `Bearer ${accessToken}`
   // //             },
   // //          });
   // //       }

   // //   let entityPsetPatch = await responseEntityPsetByDefIdPatch.json();

   // //   console.log("patched entity pSet: ", entityPsetPatch);

   // //   entities.push(entityPsetPatch);

   // //   console.log("entity added: ", entityPsetPatch);

   // //   console.log("psetValue: ", entityPsetPatch.props);

   // //   if (!psetsValues.includes(entityPsetPatch.props))
   // //   {
   // //    psetsValues.push(entityPsetPatch.props);
   // //   }

   // // };

   //    // console.log("entities", entities);

   //   var projectInstance = new ProjectClass(responseProject.id, responseProject.name);

   //   console.log("projectInstance: ", projectInstance);


   //   console.log("responseCreateFolder:", appBaseString.concat("folders"));

   // //   for (let index = 0; index < psetsValues.length; index++) {
   // //    let value = psetsValues[index];
   // // };

   // }
