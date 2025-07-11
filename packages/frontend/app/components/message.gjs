import Avatar from "frontend/components/message/avatar";
import substring from "frontend/helpers/substring";
import Username from "frontend/components/message/username";
<template><div class="message" id="{{@id}}" data-test-message>
  <Avatar @title="{{@username}}'s avatar" @initial={{substring @username start=0 end=1}} @isActive={{@userIsActive}} @isCurrent={{@userIsCurrent}} />
  <section>
    <Username @name={{@username}} @localTime={{@userLocalTime}} />

    {{yield}}
  </section>
</div></template>