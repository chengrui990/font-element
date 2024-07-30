import {describe, it, test, expect, vi} from 'vitest'
import {mount} from '@vue/test-utils'

import Button from './Button.vue'

describe('Button.vue', () => {
    it('should has the correct type class when type prop is set', () => {
        const types = ["primary", "success", "warning", "danger", "info"];
        types.forEach(type => {
            const wrapper = mount(Button, {
                props: { type: type as any}
            });
            expect(wrapper.classes()).toContain(`cr-button--${type}`);
        });
    });
})