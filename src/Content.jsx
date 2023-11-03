import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "Apple Blog",
      body: "Apples, with their crisp texture and diverse array of flavors, have a timeless allure that transcends generations. From the sweet and juicy Honeycrisp to the tartness of Granny Smith, these fruit gems come in a spectrum of tastes to suit every palate. Their versatility is astounding; whether baked into a comforting pie, sliced into a refreshing salad, or simply enjoyed as a wholesome snack, apples have a way of satisfying cravings and providing nourishment in equal measure. Beyond their culinary charm, apples hold a place in human culture and folklore, from the temptation of Eve in the Garden of Eden to the captivating tales of Johnny Appleseed. These fruits have played a role in shaping our history, enriching our cuisine, and even inspiring a sense of wonder about the world around us.      ",
      image: "https://lightlysketched.com/wp-content/uploads/2022/07/IMG-1867-1024x1024.png",
    },
    {
      id: 2,
      title: "Banana Blog",
      body: "Bananas, with their distinctive yellow hue and smooth, creamy texture, are a beloved tropical fruit that has captured hearts and palates worldwide. Their delightful simplicity and natural sweetness make them an instant crowd-pleaser, whether enjoyed as a convenient on-the-go snack, blended into a creamy smoothie, or sliced over a bowl of morning cereal. The banana's unique, curved shape and convenient peel make it a marvel of natural engineering, perfectly designed for human consumption. Beyond their culinary appeal, bananas are rich in potassium and other essential nutrients, contributing to our overall well-being. They even hold a place in pop culture, appearing in countless songs, jokes, and comedic acts. Bananas, in all their unassuming glory, are a testament to the extraordinary diversity and wonders of the natural world, reminding us of the simple joys that nature provides.",
      image: "https://easydrawingguides.com/wp-content/uploads/2018/10/Banana-10.png",
    },
    {
      id: 3,
      title: "Orange Blog",
      body: "Oranges, with their vibrant citrus burst of color and tangy-sweet flavor, are the embodiment of sunshine in the world of fruits. These spherical gems come wrapped in a natural, protective layer that peels away to reveal a refreshing, juicy interior, making them a portable delight for those seeking a zesty pick-me-up. The orange's lively aroma, reminiscent of blossoms in an orchard, awakens the senses and evokes a sense of vitality. Not only are they delicious, but oranges are also a nutritional powerhouse, packed with vitamin C, fiber, and antioxidants, making them a go-to choice for boosting the immune system and promoting overall health. In a world where life can sometimes be a bit too fast-paced, oranges serve as a reminder to slow down, savor the moment, and relish the simple pleasures that nature graciously provides.",
      image: "https://easydrawingguides.com/wp-content/uploads/2020/03/Orange-Step-10.png",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
