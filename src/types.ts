export type TMessage = {
    text: string;
    actor: 'user' | 'bot';
};

export type TAppState = {
    messages: TMessage[];
    input: string;
}

export type TMessageProps = TMessage;

export type TInputProps = {
    value: string;
    onChange: (value: string) => void;
}

export type TButtonProps = {
    onClick: () => void;
}

export type TAppProps = {
    messagesProps: TMessageProps[];
    inputProps: TInputProps;
    buttonProps: TButtonProps;
}

export type TSetState = (cb: (prevState: TAppState) => TAppState) => void;
