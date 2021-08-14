# vue-sass-storybook-config
Example config for Vue + Sass + Storybook to resolve paths.

In other words, get Storybook working with Sass paths for url props, like:

```
background-image: url('~@/assets/some-path/image.svg');
```

And also resolve Vue component imports, like:

```
import SomeComponent from '@/components/SomeComponent.vue';
```
