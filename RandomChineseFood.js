// Extensions are implemented as JavaScript classes
var RandomChineseFoodDynamicValue = function() {
  this.text = function(){
    return 'Chinese Food!';
  };

  this.evaluate = function() {
    var options = [
      "Braised pork",
      "Buddha's delight",
      "Century egg",
      "Char siu",
      "Chinese noodles",
      "Chow mein",
      "Cong you bing",
      "Congee",
      "Dim sum",
      "Double steaming / double boiling",
      "Duck's head",
      "Fried Rice",
      "Guotie",
      "Hot and sour soup",
      "Hot pot",
      "Jiaozi",
      "Kung Pao chicken",
      "Lamian",
      "Longevity buns",
      "Mantou",
      "Mooncake",
      "Noodle soup",
      "Peking Duck",
      "Pickled vegetables",
      "Red cooking",
      "Sachima",
      "Shaobing",
      "Soy egg",
      "Stir frying",
      "Sweet and sour pork",
      "Tea egg",
      "Tong sui",
      "Twice cooked pork",
      "White rice",
      "Wonton",
      "Xiaolongbao",
      "Youtiao",
      "Zhajiangmian",
      "Zongzi"
    ];

    return options[Math.floor(Math.random()*options.length)];
  };
};

RandomChineseFoodDynamicValue.identifier = "com.bamideas.RandomChineseFood";
RandomChineseFoodDynamicValue.title = "Random Chinese Food";

registerDynamicValueClass(RandomChineseFoodDynamicValue);
