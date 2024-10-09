import { registerDecorator } from 'class-validator';
import { getOwner } from '@ember/application';

export function NotBlank(validationOptions) {
  return function (object, propertyName) {
    registerDecorator({
      name: 'notBlank',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value) {
          if (typeof value === 'string') {
            return value.trim() !== '';
          }
          return value !== null && value !== undefined;
        },
        defaultMessage({ object: target }) {
          const owner = getOwner(target);
          const intl = owner.lookup('service:intl');
          const description = intl.t('errors.description');

          return intl.t('errors.blank', { description });
        },
      },
    });
  };
}
