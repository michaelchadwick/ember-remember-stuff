import UserNameInfo from 'frontend/components/user-name-info';
<template>
  <div class="user-profile" data-test-user-profile ...attributes>
    <h1 class="user-display-name">
      <UserNameInfo
        @user={{@user}}
        @kloutLevel={{@kloutLevel}}
        @onBuffKlout={{@onBuffKlout}}
        @rowLevel={{this.rowLevel}}
        @onBuffRow={{this.buffRow}}
        @firstLastName={{true}}
      />
    </h1>
    <p>{{@user.email}}</p>
    <p>{{if @user.root "Admin" "User"}}</p>
  </div>
</template>
