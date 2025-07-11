import FaIcon from "rs-common/components/fa-icon";
import t from "ember-intl/helpers/t";
<template><FaIcon @icon="spinner" @spin={{true}} />{{t "general.loading"}}</template>