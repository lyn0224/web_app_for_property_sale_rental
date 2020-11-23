import React from 'react';
import { 
    Container, 
    Error, 
    Base, 
    Title, 
    Text, 
    TextSmall,
    Link,
    Input,
    TextArea, 
    Submit ,
    Close,
    InputArea,
    InputField
} from './styles/style';

export default function Application({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Application.Base = function ApplicationBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
}

Application.Title = function ApplicationTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}
Application.InputArea = function  ApplicationInputArea({Scroll, children, ...restProps }) {
    return <InputArea Scroll {...restProps}>{children}</InputArea>;
}
Application.InputField = function  ApplicationInputField({ children, ...restProps }) {
    return <InputField {...restProps}>{children}</InputField>;
}
Application.Text = function ApplicationText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Application.TextSmall = function ApplicationTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
}

Application.Link = function ApplicationLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Application.Error = function ApplicationError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
}

Application.Input = function ApplicationInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
}

Application.TextArea = function ApplicationTextArea({ children, ...restProps }) {
    return <TextArea {...restProps}>{children}</TextArea>;
}
Application.Close = function ApplicationClose({toggleDisplay, children, ...restProps }) {
    return <Close {...restProps} onClick ={()=>toggleDisplay()}>{children}</Close>
}
Application.Submit = function ApplicationSubmit({onclick, children, ...restProps }) {
    return <Submit {...restProps} onClick = {()=>onclick()}>{children}</Submit>
}