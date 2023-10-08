import typia, { tags } from "typia";

interface Schema {

    name: string & tags.MinLength<4> & tags.MaxLength<25>

    email: string & tags.Format<'email'>

    firstName: string;

    phone: string;

    age: number & tags.Minimum<10>
}

export const validate = typia.createValidate<Schema>();
