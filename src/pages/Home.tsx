function Home() {
  return (
    <div className="mt-4 pb-10">
      <div className="flex relative">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <p className="text-yellow-300 text-8xl">This is Georgia</p>
        </div>
        <img
          src="/images/header-image-1.jpg"
          alt=""
          className="w-full h-[200px] object-cover"
        />
        <img
          src="/images/header-image-2.jpg"
          alt=""
          className="w-full h-[200px] object-cover"
        />
        <img
          src="/images/header-image-3.jpg"
          alt=""
          className="w-full h-[200px] object-cover"
        />
      </div>
      <div className="flex mt-8 gap-8">
        <img src="/images/food.jpg" alt="food image" className="object-cover" />
        <div className="">
          <h2 className="font-bold text-2xl">A Taste of Georgia</h2>
          <p>
            Fatima's eyes widened as she took her first bite of Adjarian
            khachapuri. The boat-shaped bread, filled with melted cheese and a
            golden egg yolk, was unlike anything she had tasted before. "This is
            halal and vegetarian," her Georgian host, Nino, explained with a
            smile. "Our cuisine offers many options for Muslim visitors." Next,
            Nino presented a colorful array of pkhali - vegetable pâtés made
            with walnuts and aromatic herbs. "Try these with our traditional
            bread, shoti," she urged. Fatima sipped on a glass of cold matsoni,
            a tangy yogurt drink, feeling refreshed and welcomed. She realized
            that Georgian cuisine, with its rich flavors and numerous halal
            choices, was a delightful discovery on her journey. As they finished
            their meal, Fatima couldn't wait to explore more of Georgia's
            culinary treasures.
          </p>
        </div>
      </div>
      <div className="flex mt-8 gap-8">
        <div className="">
          <h2 className="font-bold text-2xl">
            Discover Old Tbilisi's Hidden Gems
          </h2>
          <p>
            Step into the enchanting world of Old Tbilisi, where centuries-old
            traditions meet modern hospitality. As you wander through its
            winding cobblestone streets, you'll feel a familiar warmth
            reminiscent of ancient Middle Eastern cities. The crown jewel of Old
            Tbilisi is its famous sulfur baths, a tradition dating back over a
            thousand years. These domed bathhouses, reminiscent of hammams,
            offer a unique blend of relaxation and healing. The naturally hot,
            mineral-rich waters are said to cure ailments and rejuvenate the
            spirit. Inside, you'll find private rooms for families and separate
            sections for men and women, respecting cultural norms. Expert
            masseurs offer traditional treatments, leaving you refreshed and
            invigorated. After your bath, explore the nearby Botanical Garden, a
            lush oasis in the heart of the city, or visit the ancient Narikala
            Fortress for breathtaking views of Tbilisi. Old Tbilisi's charm lies
            in its ability to make you feel at home while offering new
            experiences. It's a place where Eastern and Western cultures have
            blended for centuries, creating a unique and welcoming atmosphere
            for all visitors.
          </p>
        </div>
        <img
          src="/images/old-tbilisi.jpg"
          alt="food image"
          className="object-cover w-[800px] h-[450px]"
        />
      </div>
      <div className="flex mt-8 gap-8">
        <img
          src="/images/shop.webp"
          alt="food image"
          className="object-cover w-[800px] h-[450px]"
        />
        <div className="">
          <h2 className="font-bold text-2xl">
            Shopping in Georgia: A Blend of Tradition and Luxury
          </h2>
          <p>
            Georgia offers a unique shopping experience that combines
            traditional crafts with modern luxury, perfect for discerning Arab
            visitors. Start your shopping adventure in Tbilisi's charming Old
            Town. Here, you'll find artisan shops selling handcrafted jewelry,
            colorful carpets, and intricate metalwork. For a more modern
            experience, visit Tbilisi Mall or East Point. These large shopping
            centers house international luxury brands alongside local Georgian
            designers. You'll find everything from high-end fashion to
            electronics, all under one roof. Rustaveli Avenue, Tbilisi's main
            thoroughfare, is lined with boutique shops and art galleries. It's
            the perfect place to find unique Georgian fashion pieces or artwork
            to take home. If you're looking for authentic souvenirs, visit the
            Dry Bridge Market. This open-air bazaar offers a treasure trove of
            antiques, Soviet-era memorabilia, and traditional crafts. For those
            interested in gold and jewelry, Georgia is known for its
            high-quality pieces at competitive prices. Many shops offer custom
            designs, allowing you to create a unique memento of your trip. Don't
            forget to explore local food markets like Deserter's Bazaar. Here,
            you can purchase spices, teas, and local delicacies to bring the
            taste of Georgia back home. With its mix of traditional markets,
            modern malls, and unique local products, shopping in Georgia offers
            something for every taste and budget.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
