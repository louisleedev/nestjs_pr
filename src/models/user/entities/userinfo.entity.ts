import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema() 
export class userInfo {
    @Prop() //@Prop(Validator)
    name: string;
    
    @Prop()
    age: number;

    @Prop()
    email: string;

    @Prop()
    projects: string[];
}

export const userInfoSchema = SchemaFactory.createForClass(userInfo)