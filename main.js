direc_raw_data = {'Ryan Neary': 4,
                   'Alicia Ulrich': 3,
                   'Earnest Winborne': 5,
                   'Stacey Chamberlain': 4,
                   'Edward Asiano': 4,
                   'Anthony Caleca': 4,
                   'Ron de Moraes': 3,
                   'Miguel Enciso': 5,
                   'Dan Funk': 3,
                   'Katerina Monemvassitis': 4,
                   'Canaan Rubin': 4,
                   'Erron Gordon': 3,
                   'Kourosh Taj': 3,
                   'Joe DeMaio': 3,
                   'Quentin Tarantino': 4,
                   'Leila Conners': 10,
                   'Hamish Hamilton': 3,
                   'Louis J. Horvitz': 12,
                   'Glenn Weiss': 3,
                   'Alan Carter': 3,
                   'Eric Simon': 3,
                   'Laurent Bouzereau': 5,
                   'Chris Donovan': 7,
                   'Kevin Burns': 4,
                   'Bill Harris': 4,
                   'Randy Martin': 4,
                   'Michael Epstein': 3,
                   'Nadia Conners': 3,
                   'Jeff Margolis': 3,
                   'Martin Scorsese': 14,
                   'John Pasquin': 3,
                   'Renny Temple': 3,
                   'Steven Spielberg': 3,
                   'Scott Cooper': 3};
wordcloud_data = [];
for (var key in direc_raw_data) {
  var val = direc_raw_data[key];
  var temp = {name:key,weight:val};
  wordcloud_data.push(temp);
}

pyramid_data = [['documentary', 127],
               ['drama', 89],
               ['news', 76],
               ['talk-show', 53],
               ['comedy', 51],
               ['short', 50],
               ['biography', 41],
               ['thriller', 30],
               ['music', 25],
               ['crime', 23],
               ['family', 19],
               ['romance', 18],
               ['history', 18],
               ['action', 13],
               ['reality-tv', 12],
               ['adventure', 10],
               ['sci-fi', 9],
               ['mystery', 8],
               ['game-show', 4],
               ['western', 4],
               ['horror', 4],
               ['animation', 3],
               ['sport', 3],
               ['war', 3],
               ['fantasy', 2]];

event_raw_data = [['Diary of Sorrowful Tomorrows/Whose Is This Child?', 1982, 2, 17, 6.4],
 ['Entertainment Tonight', 1981, 9, 14, 3.6],
 ['Good Morning Britain', 2014, 4, 28, 3.5],
 ['Extra', 1994, 9, 5, 3.5],
 ['WGN Morning News', 1994, 9, 6, 6.5],
 ['Jimmy Kimmel Live!', 2003, 1, 26, 6.7],
 ['Today', 1952, 1, 14, 4.8],
 ['Entertainment Tonight Canada', 2005, 9, 12, 3.1],
 ['Ice on Fire', 2019, 5, 22, 7.3],
 ['Pollinators Under Pressure', 2018, 6, 24, 5.3],
 ['Spielberg', 2017, 10, 5, 7.7],
 ['Louder Together', 2017, 9, 13, 7.8],
 ['The Oscars', 2017, 2, 26, 6.8],
 ['74th Golden Globe Awards', 2017, 1, 8, 5.5],
 ['Hollywood Film Awards', 2016, 11, 6, 7.3],
 ['Ellen: The Ellen DeGeneres Show', 2003, 9, 8, 7.1],
 ['Before the Flood', 2016, 9, 9, 8.3],
 ['Koko: The Gorilla Who Talks to People', 2016, 6, 15, 7.5],
 ['2016 MTV Movie Awards', 2016, 4, 10, 5.1],
 ['E! Live from the Red Carpet', 1995, 3, 27, 4.2],
 ['The Oscars', 2016, 2, 28, 6.4],
 ['Rencontres de cinéma', 2009, 8, 30, 3.5],
 ['The EE British Academy Film Awards', 2016, 2, 14, 6.8],
 ['22nd Annual Screen Actors Guild Awards', 2016, 1, 30, 6.3],
 ['A World Unseen: The Revenant', 2016, 1, 21, 7.4],
 ["21st Annual Critics' Choice Awards", 2016, 1, 17, 5.4],
 ['Markus Lanz', 2008, 6, 3, 3.9],
 ['Access Hollywood', 1996, 9, 24, 3.2],
 ['2016 Golden Globe Arrivals Special', 2016, 1, 10, 4.6],
 ['73rd Golden Globe Awards', 2016, 1, 10, 7.0],
 ['Weekend Today', 1987, 9, 20, 4.4],
 ['Weekend Ticket', 2013, 3, 11, 5.0],
 ['The Insider', 2004, 9, 13, 2.6],
 ['Global Citizen Festival', 2015, 9, 26, 6.7],
 ["Scorsese's Goodfellas", 2015, 5, 5, 7.5],
 ['Carbon', 2014, 8, 20, 9.3],
 ['2014 MTV Movie Awards', 2014, 4, 13, 5.7],
 ['The Oscars', 2014, 3, 2, 7.8],
 ['SAG Foundation Conversations', 1997, 7, 29, 6.1],
 ['EE British Academy Film Awards: The Red Carpet Show', 2014, 2, 16, 6.8],
 ['The EE British Academy Film Awards', 2014, 2, 16, 6.1],
 ['Made in Hollywood', 2005, 9, 30, 4.3],
 ['Saturday Night Live', 1975, 10, 11, 8.1],
 ["19th Annual Critics' Choice Movie Awards", 2014, 1, 16, 6.1],
 ['2014 Golden Globe Arrivals Special', 2014, 1, 12, 6.0],
 ['71st Golden Globe Awards', 2014, 1, 12, 7.2],
 ['The Hollywood Reporter in Focus', 2013, 12, 29, 6.8],
 ['Good Morning America', 1975, 1, 6, 4.6],
 ['Charlie Rose', 1991, 9, 30, 7.5],
 ['At the Movies', 2004, 7, 1, 8.0],
 ['Vivir de cine', 2012, 10, 26, 4.9],
 ['Celebrity Style Story', 2012, 7, 1, 4.0],
 ['Mezamashi terebi', 1994, 4, 1, 3.7],
 ['70th Golden Globe Awards', 2013, 1, 13, 7.4],
 ['Titanic: 100 Years On', 2012, 3, 24, 7.4],
 ['ES.TV HD', 2009, 2, 1, 3.0],
 ['J. Edgar: The Most Powerful Man in the World', 2012, 2, 21, 6.6],
 ['J. Edgar: A Complicated Man', 2012, 2, 21, 7.2],
 ['The 69th Annual Golden Globe Awards', 2012, 1, 15, 7.1],
 ["17th Annual Critics' Choice Movie Awards", 2012, 1, 12, 5.2],
 ['Up Close with Carrie Keagan', 2007, 2, 21, 4.3],
 ['Big Morning Buzz Live', 2011, 5, 9, 5.9],
 ['The Love We Make', 2011, 9, 9, 6.5],
 ['Unite for Japan', 2011, 4, 28, 6.8],
 ['Close Up', 2011, 8, 1, 7.2],
 ['Inception: Jump Right Into the Action', 2010, 12, 7, 8.4],
 ['Dreams: Cinema of the Subconscious', 2010, 12, 6, 7.9],
 ['Dante Ferretti: Scenografo italiano', 2010, 9, 10, 7.1],
 ['Janela Indiscreta', 2010, 3, 3, 5.8],
 ['The 7PM Project', 2009, 7, 20, 5.0],
 ['Mark at the Movies', 2009, 9, 26, 5.4],
 ['20 heures le journal', 1981, 10, 5, 5.1],
 ['HBO First Look', 1994, 3, 24, 6.0],
 ['Shutter Island: Into the Lighthouse', 2010, 6, 8, 8.4],
 ['Shutter Island: Behind the Shutters', 2010, 6, 8, 8.3],
 ['Guys Choice', 2010, 4, 29, 7.4],
 ['Hubble 3D', 2010, 11, 24, 7.7],
 ['Face 2 Face', 2010, 3, 12, 6.6],
 ['Xposé', 2007, 4, 16, 3.0],
 ['Fantástico', 1973, 8, 5, 5.6],
 ['Le grand journal de Canal+', 2004, 8, 30, 5.7],
 ['Hope for Haiti Now: A Global Benefit for Earthquake Relief',
  2010,
  1,
  22,
  6.6],
 ['The 67th Annual Golden Globe Awards', 2010, 1, 17, 7.3],
 ['Model Culture: One + Night in Bangkok', 2009, 10, 7, 4.4],
 ['Lives of Quiet Desperation: The Making of Revolutionary Road',
  2009,
  6,
  2,
  6.8],
 ["Nickelodeon Kids' Choice Awards 2009", 2009, 3, 28, 6.8],
 ['Body of Lies: Interactive Debriefing', 2009, 2, 17, 7.0],
 ["Actionable Intelligence: Deconstructing 'Body of Lies'", 2009, 2, 17, 6.9],
 ['The Oprah Winfrey Show', 1986, 1, 7, 5.1],
 ['The 66th Annual Golden Globe Awards', 2009, 1, 11, 7.6],
 ['Biography', 1987, 4, 6, 7.8],
 ['The Departed: Interviews', 2007, 11, 24, 6.6],
 ['The Departed: The Inspiration', 2007, 11, 24, 8.4],
 ["Don't Tell My Booker!!!", 2007, 11, 30, 6.4],
 ['Live Earth', 2007, 7, 7, 7.3],
 ['Blood Diamond: Focus Points', 2007, 6, 5, 7.6],
 ['The 11th Hour', 2007, 5, 19, 7.3],
 ['The World Awaits: De La Hoya vs. Mayweather', 2007, 5, 5, 6.2],
 ['Blood Diamond: Journalism on the Front Line', 2007, 3, 20, 6.5],
 ['The 79th Annual Academy Awards', 2007, 2, 25, 7.3],
 ["Stranger Than Fiction: The True Story of Whitey Bulger, Southie and 'The Departed'",
  2007,
  2,
  13,
  7.3],
 ['Crossing Criminal Cultures', 2007, 2, 13, 6.8],
 ['Senkveld med Thomas og Harald', 2003, 9, 12, 6.0],
 ['13th Annual Screen Actors Guild Awards', 2007, 1, 28, 7.0],
 ["Film '72", 1971, 11, 16, 7.2],
 ["The 12th Annual Critics' Choice Awards", 2007, 1, 20, 5.0],
 ['The 64th Annual Golden Globe Awards', 2007, 1, 15, 5.5],
 ['What It Takes', 2006, 9, 24, 6.3],
 ['The Tonight Show with Jay Leno', 1992, 5, 25, 5.2],
 ['Corazón de...', 1997, 7, 7, 3.7],
 ['Weekend Sunrise', 2005, 4, 10, 4.6],
 ['Forbes Celebrity 100: Who Made Bank?', 2006, 7, 16, 4.2],
 ['VH1: All Access', 2004, 3, 15, 6.1],
 ['12th Annual Screen Actors Guild Awards', 2006, 1, 29, 7.6],
 ['The 63rd Annual Golden Globe Awards', 2006, 1, 16, 6.4],
 ['Earth to America', 2005, 11, 20, 5.4],
 ["Titanic's Production: Behind the Scenes", 2005, 10, 25, 7.7],
 ['A Concert for Hurricane Relief', 2005, 9, 2, 5.1],
 ['The Fabulous Life of', 2003, 1, 1, 5.7],
 ['2005 MTV Movie Awards', 2005, 6, 9, 5.9],
 ["A Life Without Limits: The Making of 'The Aviator'", 2005, 5, 24, 5.9],
 ['The Affliction of Howard Hughes: Obsessive-Compulsive Disorder',
  2005,
  5,
  24,
  6.9],
 ['101 Juiciest Hollywood Hookups', 2005, 4, 25, 7.7],
 ['The 77th Annual Academy Awards', 2005, 2, 27, 6.2],
 ['11th Annual Screen Actors Guild Awards', 2005, 2, 5, 6.3],
 ['The 62nd Annual Golden Globe Awards', 2005, 1, 16, 6.0],
 ['Tsunami Aid: A Concert of Hope', 2005, 1, 15, 6.3],
 ['Only in LA', 2004, 11, 11, 5.6],
 ['History vs. Hollywood', 2001, 1, 24, 6.9],
 ['The 61st Annual Golden Globe Awards', 2004, 1, 25, 6.2],
 ['AFI Life Achievement Award: A Tribute to Robert De Niro', 2003, 6, 12, 8.0],
 ["'Catch Me If You Can': The Casting of the Film", 2003, 5, 6, 6.0],
 ["'Catch Me If You Can': In Closing", 2003, 5, 6, 5.7],
 ['Frank Abagnale: Between Reality and Fiction', 2003, 5, 6, 5.7],
 ["'Catch Me If You Can': Behind the Camera", 2003, 5, 6, 6.4],
 ['The 100 Greatest Movie Stars', 2003, 5, 4, 5.5],
 ['Cartaz Cultural', 2003, 2, 17, 6.8],
 ['Wetten, dass..?', 1981, 2, 14, 5.8],
 ['Larry King Live', 1985, 6, 3, 5.5],
 ['The 60th Annual Golden Globe Awards', 2003, 1, 19, 6.1],
 ['Richard & Judy', 2001, 11, 26, 4.0],
 ['All the Love You Cannes!', 2002, 5, 16, 6.5],
 ['Playboy: Inside the Playboy Mansion', 2002, 2, 10, 4.4],
 ['The Concert for New York City', 2001, 10, 20, 6.1],
 ['The Priory', 1999, 11, 9, 6.7],
 ['Celebrities Caught on Camera: Volume 1', 1999, 3, 2, 3.6],
 ['Bravo Profiles: The Entertainment Business', 1998, 10, 4, 6.1],
 ['Titanic: Breaking New Ground', 1998, 2, 24, 7.2],
 ['The 55th Annual Golden Globe Awards', 1998, 1, 18, 5.8],
 ['Mundo VIP', 1996, 4, 21, 4.0],
 ['David Blaine: Street Magic', 1997, 5, 19, 7.7],
 ['CBS This Morning', 1987, 11, 30, 5.0],
 ['Late Show with David Letterman', 1993, 8, 30, 6.8],
 ['Troldspejlet', 1989, 2, 3, 8.9],
 ['The 66th Annual Academy Awards', 1994, 3, 21, 6.2],
 ['The Word', 1990, 8, 10, 6.4],
 ['The 51st Annual Golden Globe Awards', 1994, 1, 22, 5.7],
 ['Fun House', 1988, 9, 3, 7.3],
 ['The Directors', 1999, 11, 24, 7.3],
 ['Entertainment Tonight', 1981, 9, 14, 3.6],
 ['Ok! TV', 2013, 9, 9, 5.0],
 ["Hell's Club Part 2. Another Night", 2017, 11, 24, 7.4],
 ['The Insider', 2004, 9, 13, 2.6],
 ['Try Not to Smile or Laugh', 2015, 2, 5, 3.8],
 ['Extra', 1994, 9, 5, 3.5],
 ['Good Morning Britain', 2014, 4, 28, 3.5],
 ['Hoy nos toca', 2017, 1, 16, 4.6],
 ['Louder with Crowder', 2015, 2, 25, 7.0],
 ['The Drunken Peasants', 2014, 1, 3, 6.8],
 ['Welcome to the Basement', 2012, 1, 13, 8.2],
 ['Do They Know It?', 2015, 4, 2, 3.7],
 ['CBS News Sunday Morning', 1979, 11, 24, 7.8],
 ['Leonning maen', 2010, 7, 11, 8.9],
 ['Fox and Friends', 1998, 2, 1, 3.4],
 ['Movie Guide', 2013, 4, 11, 7.6],
 ["10 Things You Don't Know About", 2012, 2, 27, 7.3],
 ["America's Book of Secrets", 2012, 1, 15, 7.2],
 ['Final Cut: Hölgyeim és uraim', 2012, 2, 4, 8.1],
 ['1st AACTA Awards', 2012, 1, 31, 7.7],
 ['Edición Especial Coleccionista', 2010, 8, 16, 6.7],
 ['Almost Famous IV', 2011, 1, 1, 7.5],
 ['The Clock', 2010, 10, 15, 8.8],
 ['Cool It', 2010, 9, 24, 7.0],
 ['20 to 1', 2005, 9, 29, 6.0],
 ["Gilles Jacob, l'arpenteur de la croisette", 2010, 5, 24, 5.5],
 ['The Tonight Show with Jay Leno', 1992, 5, 25, 5.2],
 ['A polos 25', 2009, 12, 14, 7.0],
 ['Live from Studio Five', 2009, 9, 14, 2.6],
 ['Almost Famous III', 2010, 1, 2, 6.6],
 ['Biography', 1987, 4, 6, 7.8],
 ['Today Tonight', 1995, 11, 24, 1.6],
 ['Los 10 magníficos', 2008, 3, 24, 8.8],
 ['Premio Donostia a Meryl Streep', 2008, 9, 27, 7.2],
 ['Punkt 12', 1992, 6, 1, 3.6],
 ['American Greed', 2007, 6, 21, 8.1],
 ['Oscar, que empiece el espectáculo', 2008, 2, 5, 6.8],
 ["The O'Reilly Factor", 1996, 10, 7, 3.5],
 ['Forbes 20 Under 25: Young, Rich and Famous', 2007, 12, 22, 7.6],
 ['100 Greatest Teen Stars', 2006, 2, 3, 6.1],
 ['Empreintes', 2007, 9, 24, 7.2],
 ["Everything's Cool", 2007, 5, 31, 6.8],
 ['20 heures le journal', 1981, 10, 5, 5.1],
 ['Larry King Live: The Greatest Interviews', 2007, 4, 17, 7.1],
 ['Manufacturing Dissent', 2007, 3, 24, 5.7],
 ['Penélope, camino a los Oscar', 2007, 2, 12, 6.1],
 ['101 Favorite Stars Way Back When', 2007, 1, 22, 4.8],
 ['The 16th Annual Gotham Awards', 2006, 12, 6, 5.5],
 ["Boffo! Tinseltown's Bombs and Blockbusters", 2006, 5, 19, 6.4],
 ['Celebrity Debut', 2006, 5, 16, 6.8],
 ['The Worst First Date Ever. Period', 2001, 7, 14, 6.9],
 ['50 Cutest Child Stars: All Grown Up', 2005, 11, 12, 7.2],
 ['Cinema mil', 2005, 7, 16, 7.2],
 ['Corazón de...', 1997, 7, 7, 3.7],
 ['Michael Moore, el gran agitador', 2004, 11, 24, 3.2],
 ["Épreuves d'artistes", 2004, 5, 6, 4.1],
 ['Celebrities Uncensored', 2003, 6, 4, 4.9],
 ['101 Biggest Celebrity Oops', 2004, 3, 2, 4.1],
 ['The Simple Life', 2003, 12, 2, 3.8],
 ['Sendung ohne Namen', 2002, 10, 17, 8.2],
 ["Shirtless: Hollywood's Sexiest Men", 2002, 6, 4, 4.7],
 ['Histoires de festival', 2002, 5, 15, 4.0],
 ['E! True Hollywood Story', 1996, 11, 24, 6.6],
 ['Twentieth Century Fox: The Blockbuster Years', 2003, 11, 15, 7.3],
 ['Gomorron', 1992, 9, 14, 4.2],
 ['Biography of the Millennium: 100 People - 1000 Years', 1999, 10, 24, 7.1],
 ['Femmes Fatales: Sharon Stone', 1998, 11, 24, 4.0],
 ['Beyond Titanic', 1998, 9, 6, 7.3],
 ["Hangin' with Leo!", 1998, 8, 25, 5.1],
 ['Leo Mania', 1998, 8, 16, 7.6],
 ['To Leo with Love', 1998, 7, 13, 6.2],
 ['The 70th Annual Academy Awards', 1998, 3, 23, 6.7],
 ['Sharon Stone - Una mujer de 100 caras', 1998, 2, 13, 7.6],
 ['Growing Pains', 1985, 9, 24, 6.6],
 ['Once Upon a Time... in Hollywood', 2019, 5, 21, 7.9],
 ['The Revenant', 2015, 12, 16, 8.0],
 ['The Audition', 2015, 9, 27, 6.6],
 ['The Wolf of Wall Street', 2013, 12, 17, 8.2],
 ['The Great Gatsby', 2013, 5, 1, 7.3],
 ['Django Unchained', 2012, 12, 11, 8.4],
 ['J. Edgar', 2011, 11, 3, 6.5],
 ['Inception: The Cobol Job', 2010, 12, 7, 7.8],
 ['Inception', 2010, 7, 8, 8.8],
 ['Shutter Island', 2010, 2, 13, 8.1],
 ['Revolutionary Road', 2008, 12, 15, 7.3],
 ['Body of Lies', 2008, 10, 5, 7.1],
 ['Blood Diamond', 2006, 12, 6, 8.0],
 ['The Departed', 2006, 9, 26, 8.5],
 ['The Aviator', 2004, 12, 14, 7.5],
 ['Catch Me If You Can', 2002, 12, 16, 8.1],
 ['Gangs of New York', 2002, 12, 9, 7.5],
 ["Don's Plum", 2001, 2, 10, 5.8],
 ['The Beach', 2000, 2, 2, 6.7],
 ['Celebrity', 1998, 9, 10, 6.3],
 ['The Man in the Iron Mask', 1998, 11, 24, 6.5],
 ['Titanic', 1997, 11, 1, 7.8],
 ["Marvin's Room", 1996, 12, 18, 6.7],
 ['Romeo + Juliet', 1996, 10, 27, 6.7],
 ['Total Eclipse', 1995, 11, 3, 6.6],
 ['The Quick and the Dead', 1995, 2, 10, 6.4],
 ['The Basketball Diaries', 1995, 1, 27, 7.3],
 ["What's Eating Gilbert Grape", 1993, 10, 24, 7.8],
 ["This Boy's Life", 1993, 4, 9, 7.3],
 ['Growing Pains', 1985, 9, 24, 6.6],
 ['Poison Ivy', 1992, 1, 24, 5.4],
 ['Critters 3', 1991, 8, 16, 4.4],
 ['Parenthood', 1990, 8, 20, 5.5],
 ['Roseanne', 1988, 10, 18, 7.0],
 ['Santa Barbara', 1984, 7, 30, 5.6],
 ['The Outsiders', 1990, 3, 25, 7.1],
 ['The New Lassie', 1989, 9, 9, 6.4],
 ['Romper Room', 1953, 11, 24, 7.5],
 ['Richard Jewell', 2019, 11, 20, 8.1],
 ['Ice on Fire', 2019, 5, 22, 7.3],
 ['Sea of Shadows', 2019, 1, 24, 7.4],
 ['Struggle: The Life and Lost Art of Szukalski', 2018, 12, 21, 8.0],
 ['Robin Hood', 2018, 11, 20, 5.3],
 ['Jonestown: Terror in the Jungle', 2018, 11, 17, 8.2],
 ['Pollinators Under Pressure', 2018, 6, 24, 5.3],
 ['Delirium', 2018, 5, 10, 5.7],
 ['The Men Who Built America: Frontiersmen', 2018, 3, 7, 7.8],
 ['Fire Chasers', 2017, 9, 8, 6.6],
 ['Live by Night', 2016, 12, 13, 6.4],
 ['A Plastic Ocean', 2016, 9, 22, 8.0],
 ['Before the Flood', 2016, 9, 9, 8.3],
 ['The Ivory Game', 2016, 9, 2, 7.9],
 ['Catching the Sun', 2015, 6, 12, 6.8],
 ['Cowspiracy: The Sustainability Secret', 2014, 6, 26, 8.3],
 ['Virunga', 2014, 4, 17, 8.3],
 ['The Wolf of Wall Street', 2013, 12, 17, 8.2],
 ['Out of the Furnace', 2013, 11, 9, 6.8],
 ['Runner Runner', 2013, 9, 18, 5.6],
 ['The Ides of March', 2011, 8, 31, 7.1],
 ['Red Riding Hood', 2011, 3, 7, 5.4],
 ['Orphan', 2009, 7, 21, 6.9],
 ['Greensburg', 2008, 6, 15, 8.3],
 ['The 11th Hour', 2007, 5, 19, 7.3],
 ['Gardener of Eden', 2007, 4, 26, 6.1],
 ['The Aviator', 2004, 12, 14, 7.5],
 ['The Assassination of Richard Nixon', 2004, 5, 17, 7.0],
 ['Once Upon a Time... in Hollywood', 2019, 5, 21, 7.9],
 ['Titanic', 1997, 11, 1, 7.8],
 ['SPF-18', 2017, 9, 29, 3.3],
 ['Don Jon', 2013, 1, 18, 6.5],
 ['J. Edgar: The Most Powerful Man in the World', 2012, 2, 21, 6.6],
 ['J. Edgar: A Complicated Man', 2012, 2, 21, 7.2],
 ['Detachment', 2011, 4, 25, 7.7],
 ['Dreams: Cinema of the Subconscious', 2010, 12, 6, 7.9],
 ['The Rooneys', 2010, 1, 1, 7.6],
 ['Bad Santa', 2003, 11, 18, 7.0],
 ["AFI's 100 Years... 100 Passions: America's Greatest Love Stories",
  2002,
  6,
  11,
  6.4],
 ['Greensburg', 2008, 6, 15, 8.3],
 ['The 11th Hour', 2007, 5, 19, 7.3]];
processed = {};
for (var i in event_raw_data){
  l = event_raw_data[i];
  if(l[1] in processed){
    processed[l[1]].push([l[0],l[4]]);
  }else {
    processed[l[1]] = [[l[0],l[4]]];
  }
}
//console.log(processed);
events_data = [];
for (var i in processed) {

  var rdate = {year:i};
  var fl = processed[i];
  var hd = 'Total: ' + fl.length +'<br />';
  var txt = '';
  for( var j in fl){
    l = fl[j];
    txt = txt+ l[0]+'--Rating: '+l[1]+'<br />';
  }
  var m = {};
  if(i<1997){
    console.log(i);
    m = {url:'https://raw.githubusercontent.com/LeoGao1/DSC106_HW4_Data/master/maxresdefault.jpg',title:'',alt:''};
  }else{
    m = {url:'https://raw.githubusercontent.com/LeoGao1/DSC106_HW4_Data/master/leonardo-770x433.webp',title:'',alt:''};
  }
  events_data.push({start_date:rdate,
                    text:{headline:hd,text:txt},
                    media:m,
                    background:{color:'#b8860b'}
                  });
}


var timeline_json = {events:events_data};

Highcharts.chart('c1', {
    series: [{
        type: 'wordcloud',
        data: wordcloud_data,
        name: 'cooperative times'
    }],
    title: {
        text: 'Directors cooperate with Leonardo DiCaprio'
    }
});


Highcharts.chart('c2', {
    chart: {
        type: 'pyramid'
    },
    title: {
        text: 'What kind of movies starring Leonardo?',
        x: -50
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                softConnector: true
            },
            center: ['40%', '50%'],
            width: '80%'
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'The Count of movies',
        data: pyramid_data
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                plotOptions: {
                    series: {
                        dataLabels: {
                            inside: true
                        },
                        center: ['50%', '50%'],
                        width: '100%'
                    }
                }
            }
        }]
    }
});

var additionalOptions = {
              start_at_end: true,
              default_bg_color: {r:0, g:0, b:0},
              timenav_height: 250,
              scale_factor: 5,
              timenav_height:20
            };
window.timeline = new TL.Timeline('timeline-embed', timeline_json,
                                additionalOptions);
