import type {Component, Ref} from "vue";

export type ButtonType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
export type NativeType = "button" | "reset" | "submit"
export type ButtonSize = "small" | "default" | "large"

export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    nativeType?: NativeType;
    disabled?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    icon?: string;
    circle?: boolean;
    // block?: boolean;
    plain?: boolean;
    round?: boolean;
    tag?: string | Component;
    // square?: boolean;
    // onClick?: (event: MouseEvent) => void;
    autofocus?: boolean;
    useThrottle?: boolean;
    throttleDuration?: number;
}

export interface ButtonEmits {
    (e: 'click', val: MouseEvent): void;
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>;
}