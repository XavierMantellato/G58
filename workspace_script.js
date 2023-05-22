import * as WorkspaceAPI from "trimble-connect-workspace-api";

this.API = await WorkspaceAPI.connect(
  window.parent,
  (event, args) => {
    switch (event) {
      case "extension.command":
      //"Command executed by the user: args.data"
        break;
      case "extension.accessToken":
      //"Accestoken or status: args.data"
        break;
      case "extension.userSettingsChanged":
      //"User settings changed!"
        break;
      default:
    }
  },
  30000
);

console.log(this.API);

//Request for the access token.
this.API.extension.getPermission("accesstoken").then((accessToken: string) => {
    //Current user access token or status: accessToken
    console.log(accesstoken);
});
