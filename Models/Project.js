export class ProjectClass {
    // Constructors

    constructor(id, name, rootId){
        this.id = id;
        this.name = name;
        this.rootFolder = rootId;
    };

    constructor(){
        this.id = "default";
        this.name = "default";
        this.rootFolder = "default";
        }
}