<script setup lang="ts">
import type {ButtonProps, ButtonEmits, ButtonInstance} from "./types.ts";
import {computed, ref} from "vue";
import {throttle} from 'lodash-es'

import CrIcon from "../Icon/Icon.vue";

defineOptions({
    name: "CrButton",
})
const props = withDefaults(defineProps<ButtonProps>(), {
    tag: "button",
    nativeType: "button",
    useThrottle: true,
    throttleDuration: 500
})

const emits = defineEmits<ButtonEmits>()

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()

const iconStyle = computed(() => ({
        marginRight: slots.default ? "6px" : "0px"
    }
))

const handleBtnClick = (e: MouseEvent) => emits("click", e)
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)


defineExpose<ButtonInstance>({
    ref: _ref
})

</script>

<template>
    <component
        :is="tag"
        ref="_ref"
        :autofocus="autofocus"
        class="cr-button"
        :type="tag === 'button' ? nativeType : void 0"
        :disabled="disabled || loading ? true : void 0"
        :class="{
            [`cr-button--${type}`]:type,
            [`cr-button--${size}`]:size,
            'is-plain': plain,
            'is-round': round,
            'is-circle':circle,
            'is-disabled': disabled,
            'is-loading': loading
        }"
        @click="(e:MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
    >
        <template v-if="loading">
            <slot name="loading">
                <cr-icon
                    class="loading-icon"
                    :icon="loadingIcon ?? 'spinner'"
                    :style="iconStyle"
                    spin
                    size="1x"
                />
            </slot>
        </template>
        <cr-icon v-if="icon && !loading"
                 :icon="icon"
                 size="1x"
                 :style="iconStyle"
        />
        <slot></slot>
    </component>
</template>

<style scoped>
@import "./style.css";
</style>