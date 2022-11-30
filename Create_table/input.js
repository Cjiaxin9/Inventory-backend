require("dotenv").config();
const client = require("../db/db");
function input() {
  //insert role if not exist in the role table
  client.query(
    `INSERT INTO role (role)
        SELECT'WORKER'
        WHERE
        NOT EXISTS (
        SELECT * FROM role WHERE role = 'WORKER'
        );

    INSERT INTO role (role)
        SELECT'ADMIN'
        WHERE
        NOT EXISTS (
        SELECT * FROM role WHERE role = 'ADMIN'
        );
  
    INSERT INTO role (role)
        SELECT'SUPERVISOR'
        WHERE
        NOT EXISTS (
        SELECT * FROM role WHERE role = 'SUPERVISOR'
        );`
  );

  //insert category if not exist in category table
  client.query(
    `    INSERT INTO category (category)
        SELECT'SNACK' 
        WHERE
        NOT EXISTS (
        SELECT * FROM category WHERE category  = 'SNACK' 
        );
          
    INSERT INTO category (category)
        SELECT'DRINK' 
        WHERE
        NOT EXISTS (
        SELECT * FROM category WHERE category  = 'DRINK' 
        );`
  );

  //insert location if not exist in location table
  client.query(
    `INSERT INTO location (location)
        SELECT'ASPEN HEIGHTS'
        WHERE
        NOT EXISTS (
        SELECT * FROM location WHERE location  = 'ASPEN HEIGHTS' 
        );
          
    INSERT INTO location (location)
        SELECT'AMK HUB' 
         WHERE
        NOT EXISTS (
        SELECT * FROM location WHERE location  = 'AMK HUB' 
        );`
  );

  //insert company if not exist in company table
  client.query(
    `
    INSERT INTO company (company)
        SELECT'FAIRPRICE XTRA - ANG MO KIO HYPERMART'
        WHERE
        NOT EXISTS (
        SELECT * FROM company WHERE company = 'FAIRPRICE XTRA - ANG MO KIO HYPERMART' 
        );
            
      INSERT INTO company(company)
        SELECT'ABC  BARGAIN CENTRE PTE LTD - BISHAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM company WHERE company  = 'ABC  BARGAIN CENTRE PTE LTD - BISHAN' 
        );

      INSERT INTO company(company)
        SELECT'ACE FRESH' 
        WHERE
        NOT EXISTS (
        SELECT * FROM company WHERE company  = 'ACE FRESH' 
        );

      INSERT INTO company(company)
        SELECT'I TRADE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM company WHERE company  = 'I TRADE' 
        );
            
      INSERT INTO company(company)
        SELECT'DD PTD LTD' 
        WHERE
        NOT EXISTS (
        SELECT * FROM company WHERE company  = 'DD PTD LTD' 
        );
            
      INSERT INTO company(company)
        SELECT'AGPG ASIA PTE LTD' 
        WHERE
        NOT EXISTS (
        SELECT * FROM company WHERE company  = 'AGPG ASIA PTE LTD' 
        );      
          
      INSERT INTO company(company)
        SELECT'TECK LEONG LEE KEE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM company WHERE company  = 'TECK LEONG LEE KEE' 
        );      
          
      INSERT INTO company(company)
        SELECT'ABC  BARGAIN CENTRE PTE LTD-QUEET STREET' 
        WHERE
        NOT EXISTS (
        SELECT * FROM company WHERE company  = 'ABC  BARGAIN CENTRE PTE LTD-QUEET STREET' 
        );

      INSERT INTO company(company)
        SELECT'GHI INTERNATIONAL HOLDING PTE LTD' 
        WHERE
        NOT EXISTS (
        SELECT * FROM company WHERE company  = 'GHI INTERNATIONAL HOLDING PTE LTD' 
        );
          
      INSERT INTO company(company)
        SELECT'IKANO PTE LTD  (IKEA JURONG)' 
        WHERE
        NOT EXISTS (
        SELECT * FROM company WHERE company  = 'IKANO PTE LTD  (IKEA JURONG)' 
        );`
  );

  //insert unit if not exist in unit table
  client.query(
    `    INSERT INTO unit (unit)
        SELECT'EA'
        WHERE
        NOT EXISTS (
        SELECT * FROM unit WHERE unit  = 'EA' 
        );
        
    INSERT INTO unit (unit)
        SELECT'BOX'
        WHERE
        NOT EXISTS (
        SELECT * FROM unit WHERE unit  = 'BOX' 
        );

    INSERT INTO unit (unit)
        SELECT'CARTON'
        WHERE
        NOT EXISTS (
        SELECT * FROM unit WHERE unit  = 'CARTON' 
        );

    INSERT INTO unit (unit)
        SELECT'UNIT' 
        WHERE
        NOT EXISTS (
        SELECT * FROM unit WHERE unit  = 'UNIT' 
        );`
  );

  //insert product list if not exist in product list table
  client.query(
    `INSERT INTO productList (product_name)
        SELECT'COKE 500ML -  BOTTLE'
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'COKE 500ML -  BOTTLE' 
        );
            
        INSERT INTO productList (product_name)
        SELECT'COKE ORIGINAL TASTE 320ML - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'COKE ORIGINAL TASTE 320ML - CAN' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'EVEREST 500ML' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'EVEREST 500ML' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'F&N 100 PLUS 325ML - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'F&N 100 PLUS 325ML - CAN' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'FAIRPRICE PURE DRINKING WATER 600ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'FAIRPRICE PURE DRINKING WATER 600ML - BOTTLE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'ICE MOUNTAIN PURE DRINKING WATER 600ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'ICE MOUNTAIN PURE DRINKING WATER 600ML - BOTTLE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'KORI 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'KORI 500ML - BOTTLE' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'NESTLE MILO - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'NESTLE MILO - CAN' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'POKKA BLUEBERRY TEA 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA BLUEBERRY TEA 500ML - BOTTLE' 
        );

    INSERT INTO productList (product_name)
        SELECT'POKKA JASMINE GREEN TEA 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA JASMINE GREEN TEA 500ML - BOTTLE' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'POKKA KIYO GRAPE 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA KIYO GRAPE 500ML - BOTTLE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'POKKA LEMON TEA 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA LEMON TEA 500ML - BOTTLE' 
        );

    INSERT INTO productList (product_name)
        SELECT'POKKA OOLONG TEA 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA OOLONG TEA 500ML - BOTTLE' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'POKKA PEACH TEA 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA PEACH TEA 500ML - BOTTLE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'POKKA RED TEA 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA RED TEA 500ML - BOTTLE' 
        );

    INSERT INTO productList (product_name)
        SELECT'POKKA STRAWBERRY TEA 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA STRAWBERRY TEA 500ML - BOTTLE' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'POKKA CHRYSANTHEMUM TEA 300ML - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA CHRYSANTHEMUM TEA 300ML - CAN' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'POKKA FUJI APPLE 300ML - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA FUJI APPLE 300ML - CAN' 
        );

    INSERT INTO productList (product_name)
        SELECT'POKKA MATCHA MILK TEA 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA MATCHA MILK TEA 500ML - BOTTLE' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'POKKA MELON MILK - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA MELON MILK - CAN' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'POKKA NATSBEE HONEY LEMON 300ML - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA NATSBEE HONEY LEMON 300ML - CAN' 
        );

    INSERT INTO productList (product_name)
        SELECT'POKKA ORANGE 1000 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA ORANGE 1000 500ML - BOTTLE' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'POKKA PEACH TEA 500ML - BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA PEACH TEA 500ML - BOTTLE' 
        );
          

    INSERT INTO productList (product_name)
        SELECT'POKKA PREMIUM MILK TEA 500ML-  BOTTLE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POKKA PREMIUM MILK TEA 500ML-  BOTTLE' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'REDBULL GOLD 250ML -CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'REDBULL GOLD 250ML -CAN' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'RIBENA BLACKCURRANT SPARKLING 325ML - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'RIBENA BLACKCURRANT SPARKLING 325ML - CAN' 
        );

    INSERT INTO productList (product_name)
        SELECT'YEOS COCONUT 300ML - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'YEOS COCONUT 300ML - CAN' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'YEOS H20 ORIGINAL 325ML - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'YEOS H20 ORIGINAL 325ML - CAN' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'JJ BUNDUNG - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'JJ BUNDUNG - CAN' 
        );

    INSERT INTO productList (product_name)
        SELECT'YEOS SOYA BEAN - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'YEOS SOYA BEAN - CAN' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'POCARI SWEET 330ML - CAN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POCARI SWEET 330ML - CAN' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'CADBURY TIMEOUT WAFER' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'CADBURY TIMEOUT WAFER' 
        );

    INSERT INTO productList (product_name)
        SELECT'CAMEL NUT - CRACKER PEANUTS' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'CAMEL NUT - CRACKER PEANUTS' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'CAMEL NUT - ROASTED PEANUTS' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'CAMEL NUT - ROASTED PEANUTS' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'CAMEL NUT  -  WHITE SUGAR NUT' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'CAMEL NUT  -  WHITE SUGAR NUT' 
        );

    INSERT INTO productList (product_name)
        SELECT'CAR TOWER' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'CAR TOWER' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'CERTIFIED TRUE COPY STAMP' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'CERTIFIED TRUE COPY STAMP' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'CHALBEE PRAWN CRACKER [ORIGINAL] [HALAL]' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'CHALBEE PRAWN CRACKER [ORIGINAL] [HALAL]' 
        );
            
    INSERT INTO productList (product_name)
        SELECT'CHUPA CHUPS BITES MIXED FRUIT FAVOR' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'CHUPA CHUPS BITES MIXED FRUIT FAVOR' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'CHUPA CHUPS TUBES MINI ASSORTED FLAVOUR' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'CHUPA CHUPS TUBES MINI ASSORTED FLAVOUR' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'COLGATE TRIPLE ACTION TOOTH PASTE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'COLGATE TRIPLE ACTION TOOTH PASTE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'DIMPA STOR BAG (65 X 22)' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'DIMPA STOR BAG (65 X 22)' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'DOMESTOS DISINFECTING SURFACE WIPES' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'DOMESTOS DISINFECTING SURFACE WIPES' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'FRITZ SOUR TAPE - COLA' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'FRITZ SOUR TAPE - COLA' 
        );

    INSERT INTO productList (product_name)
        SELECT'FRITZ SOUR TAPE - STRAWBERRY' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'FRITZ SOUR TAPE - STRAWBERRY' 
        );

          
    INSERT INTO productList (product_name)
        SELECT'FRITZ SOUR TAPE - BLUE RASPBERRY' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'FRITZ SOUR TAPE - BLUE RASPBERRY' 
        );

    INSERT INTO productList (product_name)
        SELECT'FRUIT PLUS ORANGE CHEWY CANDY' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'FRUIT PLUS ORANGE CHEWY CANDY' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'FRUIT PLUS STRAWBERRY CHEWY CANDY' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'FRUIT PLUS STRAWBERRY CHEWY CANDY' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'GEEEF MAGIC DUST LOLLIPOPS - COKE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'GEEEF MAGIC DUST LOLLIPOPS - COKE' 
        );

    INSERT INTO productList (product_name)
        SELECT'GEEEF MAGIC DUST LOLLIPOPS - GRAPE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'GEEEF MAGIC DUST LOLLIPOPS - GRAPE' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'GEEEF MAGIC DUST LOLLIPOPS - STRAWBERRY' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'GEEEF MAGIC DUST LOLLIPOPS - STRAWBERRY' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'GLICO POCKY COOKIES & CREAM' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'GLICO POCKY COOKIES & CREAM' 
        );

    INSERT INTO productList (product_name)
        SELECT'GORSNYGG BAG (40X30X6)' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'GORSNYGG BAG (40X30X6)' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'HORLICKS MALTIES CANDY [HALAL]' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'HORLICKS MALTIES CANDY [HALAL]' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'IMPACT MINTS PEPPERMINT ORIGINAL' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'IMPACT MINTS PEPPERMINT ORIGINAL' 
        );

    INSERT INTO productList (product_name)
        SELECT'IMPACT MINTS SPEARMINT ORIGINAL' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'IMPACT MINTS SPEARMINT ORIGINAL' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'IMPACT MINTS SPEARMINT SLIM SLIDE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'IMPACT MINTS SPEARMINT SLIM SLIDE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'IMPACT MINTS STRONGMINT ORIGINAL' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'IMPACT MINTS STRONGMINT ORIGINAL' 
        );

    INSERT INTO productList (product_name)
        SELECT'J PTT CHIP SEAWEED' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'J PTT CHIP SEAWEED' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'J&J P/C-S CHILLI' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'J&J P/C-S CHILLI' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'J&J P/C-S O&GAR' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'J&J P/C-S O&GAR' 
        );

    INSERT INTO productList (product_name)
        SELECT'JACK & JILL POTATO CHIPS - BBQ' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'JACK & JILL POTATO CHIPS - BBQ' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'JACK & JILL POTATO CHIPS - SALSA CHILLI' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'JACK & JILL POTATO CHIPS - SALSA CHILLI' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'JJ P/CHP-BBQ' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'JJ P/CHP-BBQ' 
        );

    INSERT INTO productList (product_name)
        SELECT'KIT KAT BITES' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'KIT KAT BITES' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'KIT KAT CHUNKY' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'KIT KAT CHUNKY' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'KIT KAT CHUNKY WHITE CHOCOLATE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'KIT KAT CHUNKY WHITE CHOCOLATE' 
        );

    INSERT INTO productList (product_name)
        SELECT 'LAYS CHIPS - CLASSIC' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'LAYS CHIPS - CLASSIC' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'LAYS CHIPS - SQUID' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'LAYS CHIPS - SQUID' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'LAYS CHIPS - HOT SPICY' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'LAYS CHIPS - HOT SPICY' 
        );

    INSERT INTO productList (product_name)
        SELECT'LEO POTATO & CHEESE BISCUIT' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'LEO POTATO & CHEESE BISCUIT' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'LOTTE CHOCO PIE BANANA' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'LOTTE CHOCO PIE BANANA' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'M&M MILK CHOCOLATE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'M&M MILK CHOCOLATE' 
        );
            
    INSERT INTO productList (product_name)
        SELECT'M&M PEANUT CHOCOLATE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'M&M PEANUT CHOCOLATE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'MARS CHOCOLATE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'MARS CHOCOLATE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'MEIJI HELLO PANDA CHOCOLATE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'MEIJI HELLO PANDA CHOCOLATE' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'MEIJI LUCKY STICK BUSCUIT CHOCOLATE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'MEIJI LUCKY STICK BUSCUIT CHOCOLATE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'MEIJI LUCKY STICK BUSCUIT STREWBERRY' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'MEIJI LUCKY STICK BUSCUIT STREWBERRY' 
        );

    INSERT INTO productList (product_name)
        SELECT'MENTOS COOL CHEW - FRESHMINT' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'MENTOS COOL CHEW - FRESHMINT' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'MENTOS COOL CHEW - LIME MINT' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'MENTOS COOL CHEW - LIME MINT' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'MINI OREA CUP - VANILLA' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'MINI OREA CUP - VANILLA' 
        );

    INSERT INTO productList (product_name)
        SELECT'NESTLE CRUNCH BAR' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'NESTLE CRUNCH BAR' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'NESTLE KIT KAT CHUNKY' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'NESTLE KIT KAT CHUNKY' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'NESTLE MILO NUGGETS' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'NESTLE MILO NUGGETS' 
        );

    INSERT INTO productList (product_name)
        SELECT'NISSIN CHEESE WAFER' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'NISSIN CHEESE WAFER' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'NISSIN CHOCOLATE WAFER' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'NISSIN CHOCOLATE WAFER'  
        );
          
    INSERT INTO productList (product_name)
        SELECT'NISSIN WAFER CHOCOLATE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'NISSIN WAFER CHOCOLATE' 
        );

    INSERT INTO productList (product_name)
        SELECT'NYSKOL JD DISH DRYING' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'NYSKOL JD DISH DRYING' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'OREA CHOCOLATE WAFER ROLL' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'OREA CHOCOLATE WAFER ROLL' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'OREA THINS VANILA DELIGHT BISCUIT' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'OREA THINS VANILA DELIGHT BISCUIT' 
        );

    INSERT INTO productList (product_name)
        SELECT'PILOT PEN' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'PILOT PEN' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'POCKY CHOCOLATE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POCKY CHOCOLATE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'POCKY COOKIES & CREAM' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POCKY COOKIES & CREAM' 
        );

    INSERT INTO productList (product_name)
        SELECT'POCKY STRAWBERRY' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'POCKY STRAWBERRY' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'PRINGLES ORIGINAL - ORIGINAL' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'PRINGLES ORIGINAL - ORIGINAL' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'PRINGLES ORIGINAL - SOUR CREAM ONION' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'PRINGLES ORIGINAL - SOUR CREAM ONION' 
        );

    INSERT INTO productList (product_name)
        SELECT'ROLLER COASTERS - BBQ' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'ROLLER COASTERS - BBQ' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'ROLLER COASTERS - CHEESE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'ROLLER COASTERS - CHEESE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'SKITTLES - ORIGINAL' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'SKITTLES - ORIGINAL' 
        );

    INSERT INTO productList (product_name)
        SELECT'SKITTLES - SOUR MIX' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'SKITTLES - SOUR MIX' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'SNICKERS SINGLE BAR' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'SNICKERS SINGLE BAR' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'STORAGE BOX RECTANGLE CLIP LOCKER' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'STORAGE BOX RECTANGLE CLIP LOCKER' 
        );

    INSERT INTO productList (product_name)
        SELECT'SUPER RING - CHEESE BALLS' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'SUPER RING - CHEESE BALLS' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'SUPER RING - CHICKEN RING' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'SUPER RING - CHICKEN RING' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'SUPER RING - SUPER RING' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'SUPER RING - SUPER RING' 
        );

    INSERT INTO productList (product_name)
        SELECT'TWISTIES CHEESE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'TWISTIES CHEESE' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'TWIX CHOCOLATE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'TWIX CHOCOLATE' 
        );
          
    INSERT INTO productList (product_name)
        SELECT'TWIX FINGERS CHOCOLATE' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'TWIX FINGERS CHOCOLATE' 
        );
            
    INSERT INTO productList (product_name)
        SELECT'YUPI GUMMY BIG FRANK' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'YUPI GUMMY BIG FRANK' 
        );
    
    INSERT INTO productList (product_name)
        SELECT'YUPI TWIN BURGER' 
        WHERE
        NOT EXISTS (
        SELECT * FROM productList WHERE product_name = 'YUPI TWIN BURGER' 
        );`
  );

  //insert user if not exist in the logintable
  client.query(
    `INSERT INTO logintable(username, password,role)
        SELECT 'Estelle','$2a$09$FUC1MUUTN41ECFafBCwEru4MB33NyItGWZPv2x9viWOkZ01yB3ZlO','WORKER'
        WHERE
        NOT EXISTS (
        SELECT * FROM logintable WHERE username = 'Estelle'
    );
    INSERT INTO logintable(username, password,role)
        SELECT 'Daniel','$2a$09$UW1FOU.cQ5p3exkECccQq.0X84Aif1mbvtevqGA7H39HkOUUYHp46','SUPERVISOR'
        WHERE
        NOT EXISTS (
        SELECT * FROM logintable WHERE username = 'Daniel'
    );
    INSERT INTO logintable(username, password,role)
        SELECT 'Sihui','$2a$09$cc.piPqS1/5lWgWmVBm66uWBqx.0GD/id05GTmYCCzaC.sewaWTwS','ADMIN'
        WHERE
        NOT EXISTS (
        SELECT * FROM logintable WHERE username = 'Sihui'
    );`
  );
  // insert one withdrawlist
  client.query(
    `INSERT INTO withdraw ( date, category, location)
        SELECT '2022-05-06','SNACK','AMK HUB'
        WHERE
        NOT EXISTS (
         SELECT * FROM withdraw WHERE id = '1');`
  );
  client.query(
    `INSERT INTO withdraw_product(Qty,withdraw_id, unit, product_name)
           SELECT '1','1','EA','COKE ORIGINAL TASTE 320ML - CAN'
           WHERE
           NOT EXISTS (
           SELECT * FROM withdraw_product WHERE id = '1');

    INSERT INTO withdraw_product(Qty,withdraw_id, unit, product_name)
        SELECT '1','1','EA','CADBURY TIMEOUT WAFER'
        WHERE
        NOT EXISTS (
        SELECT * FROM withdraw_product WHERE id = '2');`
  );
}

module.exports = input;
