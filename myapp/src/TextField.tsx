import React, {useRef, useState} from "react"

interface Person{
    firstName: string
    lastName: string
}
interface Props {
    text: string;
    //? means it's optional, passing it isn't necessary.
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    // obj: {
    //     f1: string
    // } person is an obj
    person: Person;

}

interface TextNode {
    text: string

}
export const TextField: React.FC<Props> = ({

                                           }) =>{
    const [count, setCount] = useState<TextNode>({text: 'hello'});//the most commen hook

    const inputRef = useRef<HTMLInputElement> (null);

    return (
        <div>
            <input ref={inputRef}/>

        </div>
    );
};
