var models = ['user'];
export default function getName(string) {
  console.log('getName', string);
  var camelString = models.find(function (item) {
    return string.toUpperCase() === item.toUpperCase();
  });

  return camelString ? camelString : string;
}
