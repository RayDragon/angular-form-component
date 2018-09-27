export class FormElement{
    type:String;
    constructor(t:String='input'){
        this.type=t;
    }
}
export class InputFormElement extends FormElement{
    constructor(public input_type:String){
        super();
    }
}

export class Form{
    elements: FormElement[]
    value:String
    constructor(){
        this.elements = [];
    }
}