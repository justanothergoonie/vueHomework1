console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		tvShowData: {
			id: 112,
			url: 'http://www.tvmaze.com/shows/112/south-park',
			name: 'South Park',
			type: 'Animation',
			language: 'English',
			genres: 'Comedy',
			status: 'Running',
			runtime: 30,
			premiered: '1997-08-13',
			officialSite: 'http://southpark.cc.com',
			schedule: {
				time: '22:00',
				days: 'Wednesday',
			},
			rating: {
				average: 8.6,
			},
			weight: 97,
			network: {
				id: 23,
				name: 'Comedy Central',
				country: {
					name: 'United States',
					code: 'US',
					timezone: 'America/New_York',
				},
			},
			webChannel: null,
			externals: {
				tvrage: 5266,
				thetvdb: 75897,
				imdb: 'tt0121955',
			},
			image: {
				medium:
					'http://static.tvmaze.com/uploads/images/medium_portrait/0/935.jpg',
				original:
					'http://static.tvmaze.com/uploads/images/original_untouched/0/935.jpg',
			},
			summary:
				'South Park is an adult comedy animation show centred around 4 children in the small town of south park. Its humour is often dark involving satirical elements and mocking current real-life events.',
			updated: 1580329363,
			_links: {
				self: {
					href: 'http://api.tvmaze.com/shows/112',
				},
				previousepisode: {
					href: 'http://api.tvmaze.com/episodes/1750710',
				},
			},
			_embedded: {
				episodes: [
					{
						id: 7919,
						url:
							'http://www.tvmaze.com/episodes/7919/south-park-1x01-cartman-gets-an-anal-probe',
						name: 'Cartman Gets an Anal Probe',
						season: 1,
						number: 1,
						airdate: '1997-08-13',
						airtime: '22:00',
						airstamp: '1997-08-14T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188958.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188958.jpg',
						},
						summary:
							"Aliens wreak havoc in the Rockies, first by subjecting Cartman to an anal probe, and then by abducting Kyle's baby brother.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7919',
							},
						},
					},
					{
						id: 7920,
						url:
							'http://www.tvmaze.com/episodes/7920/south-park-1x02-weight-gain-4000',
						name: 'Weight Gain 4000',
						season: 1,
						number: 2,
						airdate: '1997-08-20',
						airtime: '22:00',
						airstamp: '1997-08-21T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188957.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188957.jpg',
						},
						summary:
							' Cartman tries to slim down when he learns a TV talk-show host is coming to town to give him an award, but he bulks up instead. Meanwhile, Mr. Garrison hatches a plan to murder the visiting celeb.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7920',
							},
						},
					},
					{
						id: 7921,
						url:
							'http://www.tvmaze.com/episodes/7921/south-park-1x03-volcano',
						name: 'Volcano',
						season: 1,
						number: 3,
						airdate: '1997-08-27',
						airtime: '22:00',
						airstamp: '1997-08-28T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/45/112943.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/45/112943.jpg',
						},
						summary:
							" A volcanic eruption interrupts the boys' camping trip.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7921',
							},
						},
					},
					{
						id: 7922,
						url:
							'http://www.tvmaze.com/episodes/7922/south-park-1x04-big-gay-als-big-gay-boat-ride',
						name: "Big Gay Al's Big Gay Boat Ride",
						season: 1,
						number: 4,
						airdate: '1997-09-03',
						airtime: '22:00',
						airstamp: '1997-09-04T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188956.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188956.jpg',
						},
						summary:
							" When his pup explores his sexuality, Stan gets so upset that he inadvertently threatens to blow the school's homecoming-game victory.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7922',
							},
						},
					},
					{
						id: 7923,
						url:
							'http://www.tvmaze.com/episodes/7923/south-park-1x05-an-elephant-makes-love-to-a-pig',
						name: 'An Elephant Makes Love to a Pig',
						season: 1,
						number: 5,
						airdate: '1997-09-10',
						airtime: '22:00',
						airstamp: '1997-09-11T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188955.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188955.jpg',
						},
						summary:
							" After a botched genetic experiment, Stan's clone is let loose in the town. Voices include Trey Parker and Matt Stone.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7923',
							},
						},
					},
					{
						id: 7924,
						url:
							'http://www.tvmaze.com/episodes/7924/south-park-1x06-death',
						name: 'Death',
						season: 1,
						number: 6,
						airdate: '1997-09-17',
						airtime: '22:00',
						airstamp: '1997-09-18T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188954.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188954.jpg',
						},
						summary: ' The boys summon the Grim Reaper.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7924',
							},
						},
					},
					{
						id: 7925,
						url:
							'http://www.tvmaze.com/episodes/7925/south-park-1x07-pinkeye',
						name: 'Pinkeye',
						season: 1,
						number: 7,
						airdate: '1997-10-29',
						airtime: '22:00',
						airstamp: '1997-10-30T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188953.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188953.jpg',
						},
						summary:
							" A pinkeye epidemic interrupts the boys' plans to win a Halloween-costume contest; and Kenny has a run-in with a Russian space station when it falls to Earth.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7925',
							},
						},
					},
					{
						id: 7926,
						url:
							'http://www.tvmaze.com/episodes/7926/south-park-1x08-starvin-marvin',
						name: "Starvin' Marvin",
						season: 1,
						number: 8,
						airdate: '1997-11-19',
						airtime: '22:00',
						airstamp: '1997-11-20T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188952.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188952.jpg',
						},
						summary:
							' After the boys contact an agency that helps starving children, Government authorities send Cartman to Ethiopia. Meanwhile, the town holds a drive for canned goods; and turkeys revolt against a genetic engineer.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7926',
							},
						},
					},
					{
						id: 7927,
						url:
							'http://www.tvmaze.com/episodes/7927/south-park-1x09-mr-hankey-the-christmas-poo',
						name: 'Mr. Hankey, the Christmas Poo',
						season: 1,
						number: 9,
						airdate: '1997-12-17',
						airtime: '22:00',
						airstamp: '1997-12-18T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188951.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188951.jpg',
						},
						summary:
							" Because he's Jewish, Kyle is denied involvement in the Nativity play and excluded from trips to see Santa. Meanwhile, South Park residents try to plan a politically correct celebration; and Mr. Hankey visits Kyle.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7927',
							},
						},
					},
					{
						id: 7928,
						url:
							'http://www.tvmaze.com/episodes/7928/south-park-1x10-damien',
						name: 'Damien',
						season: 1,
						number: 10,
						airdate: '1998-02-04',
						airtime: '22:00',
						airstamp: '1998-02-05T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188950.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188950.jpg',
						},
						summary:
							" As Cartman celebrates his birthday, Jesus Christ and Satan duke it out on a pay-per-view TV special. Meanwhile, Satan's son Damien tries to fit in with the crowd after making a violent first impression.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7928',
							},
						},
					},
					{
						id: 7929,
						url:
							'http://www.tvmaze.com/episodes/7929/south-park-1x11-toms-rhinoplasty',
						name: "Tom's Rhinoplasty",
						season: 1,
						number: 11,
						airdate: '1998-02-11',
						airtime: '22:00',
						airstamp: '1998-02-12T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188949.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188949.jpg',
						},
						summary:
							" Mr. Garrison takes a leave of absence to have a nose job and is replaced by Miss Ellen, a substitute who threatens Stan and Wendy's relationship.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7929',
							},
						},
					},
					{
						id: 7930,
						url:
							'http://www.tvmaze.com/episodes/7930/south-park-1x12-mecha-streisand',
						name: 'Mecha-Streisand',
						season: 1,
						number: 12,
						airdate: '1998-02-18',
						airtime: '22:00',
						airstamp: '1998-02-19T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188948.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188948.jpg',
						},
						summary:
							' The future of the world is at stake after the boys unearth a prehistoric relic that spawns a monster.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7930',
							},
						},
					},
					{
						id: 7931,
						url:
							'http://www.tvmaze.com/episodes/7931/south-park-1x13-cartmans-mom-is-a-dirty-slut',
						name: "Cartman's Mom is a Dirty Slut",
						season: 1,
						number: 13,
						airdate: '1998-02-25',
						airtime: '22:00',
						airstamp: '1998-02-26T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188947.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188947.jpg',
						},
						summary:
							' When Cartman begins to exhibit odd behavior, a counselor suggests that finding his father may solve his problems.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7931',
							},
						},
					},
					{
						id: 7932,
						url:
							'http://www.tvmaze.com/episodes/7932/south-park-2x01-terrance-phillip-in-not-without-my-anus',
						name: 'Terrance & Phillip in "Not Without My Anus"',
						season: 2,
						number: 1,
						airdate: '1998-04-01',
						airtime: '22:00',
						airstamp: '1998-04-02T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188946.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188946.jpg',
						},
						summary:
							' An episode featuring Terrance and Phillip, who must save Canada from Saddam Hussein.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7932',
							},
						},
					},
					{
						id: 7933,
						url:
							'http://www.tvmaze.com/episodes/7933/south-park-2x02-cartmans-mom-is-still-a-dirty-slut',
						name: "Cartman's Mom is Still a Dirty Slut",
						season: 2,
						number: 2,
						airdate: '1998-04-22',
						airtime: '22:00',
						airstamp: '1998-04-23T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188945.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188945.jpg',
						},
						summary:
							" Chef and the boys rush to the hospital to check on Mephesto, who's gunned down just as he's set to reveal the identity of Cartman's father. Meanwhile, the townspeople search for the gunman and battle a snowstorm.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7933',
							},
						},
					},
					{
						id: 7934,
						url:
							'http://www.tvmaze.com/episodes/7934/south-park-2x03-chickenlover',
						name: 'Chickenlover',
						season: 2,
						number: 3,
						airdate: '1998-05-20',
						airtime: '22:00',
						airstamp: '1998-05-21T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188944.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188944.jpg',
						},
						summary:
							" The boys try to circumvent a delicate surgical procedure set to be performed on Kyle's brother as part of a tradition begun by their Jewish ancestors. Meanwhile, Mr. Mackey is cut from his job after he botches a lecture on drugs.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7934',
							},
						},
					},
					{
						id: 7935,
						url:
							'http://www.tvmaze.com/episodes/7935/south-park-2x04-ikes-wee-wee',
						name: "Ike's Wee Wee",
						season: 2,
						number: 4,
						airdate: '1998-05-27',
						airtime: '22:00',
						airstamp: '1998-05-28T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188943.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188943.jpg',
						},
						summary:
							" Chaos ensues on the streets of South Park as the town is overcome by a crime wave that leaves scores of chickens assaulted. And Officer Barbrady's no help...because he's resigned.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7935',
							},
						},
					},
					{
						id: 7936,
						url:
							'http://www.tvmaze.com/episodes/7936/south-park-2x05-conjoined-fetus-lady',
						name: 'Conjoined Fetus Lady',
						season: 2,
						number: 5,
						airdate: '1998-06-03',
						airtime: '22:00',
						airstamp: '1998-06-04T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188942.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188942.jpg',
						},
						summary:
							" Kyle's terrified after an injury sustained during a dodgeball game sends him to the nurse---a conjoined twin with an unusual medical condition. Meanwhile, Pip leads the dodgeball team to the world championships in China.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7936',
							},
						},
					},
					{
						id: 7937,
						url:
							'http://www.tvmaze.com/episodes/7937/south-park-2x06-the-mexican-staring-frog-of-southern-sri-lanka',
						name: 'The Mexican Staring Frog of Southern Sri Lanka',
						season: 2,
						number: 6,
						airdate: '1998-06-10',
						airtime: '22:00',
						airstamp: '1998-06-11T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188941.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188941.jpg',
						},
						summary:
							' Jimbo and Ned launch a TV hunting show, which goes head-to-head with "Jesus and Pals," the popular cable-access series.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7937',
							},
						},
					},
					{
						id: 7938,
						url:
							'http://www.tvmaze.com/episodes/7938/south-park-2x07-city-on-the-edge-of-forever-aka-flashbacks',
						name: 'City on the Edge of Forever (a.k.a. Flashbacks)',
						season: 2,
						number: 7,
						airdate: '1998-06-17',
						airtime: '22:00',
						airstamp: '1998-06-18T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/67/168815.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/67/168815.jpg',
						},
						summary:
							' The boys put twists on events such as the attempted assassination of a talk-show host and a fight with Death as their bus hangs off a cliff. Meanwhile, Ms. Crabtree finds fame when she goes to look for help.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7938',
							},
						},
					},
					{
						id: 7939,
						url:
							'http://www.tvmaze.com/episodes/7939/south-park-2x08-summer-sucks',
						name: 'Summer Sucks',
						season: 2,
						number: 8,
						airdate: '1998-06-24',
						airtime: '22:00',
						airstamp: '1998-06-25T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/67/168820.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/67/168820.jpg',
						},
						summary:
							" The mayor devises a plan to make the town's Fourth of July celebration memorable, despite a ban on fireworks; and Mr. Hat vanishes, causing Mr. Garrison to visit a therapist.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7939',
							},
						},
					},
					{
						id: 7940,
						url:
							'http://www.tvmaze.com/episodes/7940/south-park-2x09-chefs-chocolate-salty-balls',
						name: "Chef's Chocolate Salty Balls",
						season: 2,
						number: 9,
						airdate: '1998-08-19',
						airtime: '22:00',
						airstamp: '1998-08-20T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188940.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188940.jpg',
						},
						summary:
							' Hollywood pooh-bahs in town for a film festival try to sign Mr. Hankey to a movie deal after their upscale cuisine disrupts the sewage system and nearly destroys him. Meanwhile, locals are up in arms over the movie-industry event.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7940',
							},
						},
					},
					{
						id: 7941,
						url:
							'http://www.tvmaze.com/episodes/7941/south-park-2x10-chickenpox',
						name: 'Chickenpox',
						season: 2,
						number: 10,
						airdate: '1998-08-26',
						airtime: '22:00',
						airstamp: '1998-08-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188939.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188939.jpg',
						},
						summary: ' The town faces an outbreak of chicken pox.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7941',
							},
						},
					},
					{
						id: 7942,
						url:
							'http://www.tvmaze.com/episodes/7942/south-park-2x11-roger-ebert-should-lay-off-the-fatty-foods',
						name: 'Roger Ebert Should Lay Off the Fatty Foods',
						season: 2,
						number: 11,
						airdate: '1998-09-02',
						airtime: '22:00',
						airstamp: '1998-09-03T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188938.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188938.jpg',
						},
						summary:
							' Stan, Kyle and Kenny gravitate toward a new planetarium; and Cartman auditions to be the star of "Les Miserables."',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7942',
							},
						},
					},
					{
						id: 7943,
						url:
							'http://www.tvmaze.com/episodes/7943/south-park-2x12-clubhouses',
						name: 'Clubhouses',
						season: 2,
						number: 12,
						airdate: '1998-09-23',
						airtime: '22:00',
						airstamp: '1998-09-24T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188937.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188937.jpg',
						},
						summary:
							' The boys each build a clubhouse---and Stan is eager to have Wendy over for a game of "truth or dare." However, his parents\' separation interferes with his plans.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7943',
							},
						},
					},
					{
						id: 7944,
						url:
							'http://www.tvmaze.com/episodes/7944/south-park-2x13-cow-days',
						name: 'Cow Days',
						season: 2,
						number: 13,
						airdate: '1998-09-30',
						airtime: '22:00',
						airstamp: '1998-10-01T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188936.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188936.jpg',
						},
						summary:
							" During South Park's annual rodeo, the boys compete in a bull-riding contest. Meanwhile, the cows find religion.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7944',
							},
						},
					},
					{
						id: 7945,
						url:
							'http://www.tvmaze.com/episodes/7945/south-park-2x14-chef-aid',
						name: 'Chef Aid',
						season: 2,
						number: 14,
						airdate: '1998-10-07',
						airtime: '22:00',
						airstamp: '1998-10-08T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/61/152904.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/61/152904.jpg',
						},
						summary:
							' Chef invites some of his well-known musician friends to participate in a benefit concert after he loses all of his money in a lawsuit. Meanwhile, the boys join the workforce to help him get out of debt.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7945',
							},
						},
					},
					{
						id: 7946,
						url:
							'http://www.tvmaze.com/episodes/7946/south-park-2x15-spooky-fish',
						name: 'Spooky Fish',
						season: 2,
						number: 15,
						airdate: '1998-10-28',
						airtime: '22:00',
						airstamp: '1998-10-29T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188935.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188935.jpg',
						},
						summary:
							" Stan fears his pet fish may be involved with a rash of unsolved murders that occur on Halloween. Meanwhile, Cartman starts killing people---with kindness, even going so far as to appreciate Wendy's liberal views.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7946',
							},
						},
					},
					{
						id: 7947,
						url:
							'http://www.tvmaze.com/episodes/7947/south-park-2x16-merry-christmas-charlie-manson',
						name: 'Merry Christmas Charlie Manson!',
						season: 2,
						number: 16,
						airdate: '1998-12-09',
						airtime: '22:00',
						airstamp: '1998-12-10T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188934.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188934.jpg',
						},
						summary:
							"The boys go to Cartman's grandmother's house for a holiday feast that's also attended by Cartman's uncle (an escaped con) and the police.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7947',
							},
						},
					},
					{
						id: 7948,
						url:
							'http://www.tvmaze.com/episodes/7948/south-park-2x17-gnomes-aka-underpants-gnomes',
						name: 'Gnomes (a.k.a. Underpants Gnomes)',
						season: 2,
						number: 17,
						airdate: '1998-12-16',
						airtime: '22:00',
						airstamp: '1998-12-17T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188933.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188933.jpg',
						},
						summary:
							"The boys work on a project with a high-strung kid whose parents' coffee shop faces strong competition from a conglomerate that hopes to set up in South Park.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7948',
							},
						},
					},
					{
						id: 7949,
						url:
							'http://www.tvmaze.com/episodes/7949/south-park-2x18-prehistoric-ice-man',
						name: 'Prehistoric Ice Man',
						season: 2,
						number: 18,
						airdate: '1999-01-20',
						airtime: '22:00',
						airstamp: '1999-01-21T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188932.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188932.jpg',
						},
						summary:
							"The boys unearth a prehistoric man frozen in ice, but the discovery jeopardizes Stan and Kyle's friendship when they argue over what to name him.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7949',
							},
						},
					},
					{
						id: 7950,
						url:
							'http://www.tvmaze.com/episodes/7950/south-park-3x01-rainforest-schmainforest',
						name: 'Rainforest Schmainforest',
						season: 3,
						number: 1,
						airdate: '1999-04-07',
						airtime: '22:00',
						airstamp: '1999-04-08T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188931.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188931.jpg',
						},
						summary:
							'The boys accompany a teacher and her singing-and-dancing group to Central America to raise awareness of the rain forest. Also: Kenny falls for a choir member; and Kyle has trouble mastering the choreography.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7950',
							},
						},
					},
					{
						id: 7951,
						url:
							'http://www.tvmaze.com/episodes/7951/south-park-3x02-spontaneous-combustion',
						name: 'Spontaneous Combustion',
						season: 3,
						number: 2,
						airdate: '1999-04-14',
						airtime: '22:00',
						airstamp: '1999-04-15T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188930.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188930.jpg',
						},
						summary:
							"Residents start to spontaneously combust, prompting Stan's geologist father to investigate.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7951',
							},
						},
					},
					{
						id: 7952,
						url:
							'http://www.tvmaze.com/episodes/7952/south-park-3x03-the-succubus-aka-chefs-mama',
						name: "The Succubus (a.k.a. Chef's Mama)",
						season: 3,
						number: 3,
						airdate: '1999-04-21',
						airtime: '22:00',
						airstamp: '1999-04-22T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188929.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188929.jpg',
						},
						summary:
							'Chef gets a visit from his mother when the boys feel his bride-to-be has taken their place in his heart.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7952',
							},
						},
					},
					{
						id: 7953,
						url:
							'http://www.tvmaze.com/episodes/7953/south-park-3x04-jakovasaurs',
						name: 'Jakovasaurs',
						season: 3,
						number: 4,
						airdate: '1999-06-16',
						airtime: '22:00',
						airstamp: '1999-06-17T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188928.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188928.jpg',
						},
						summary:
							"The boys discover two nearly extinct animals while camping on the banks of Stark's Pond.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7953',
							},
						},
					},
					{
						id: 7954,
						url:
							'http://www.tvmaze.com/episodes/7954/south-park-3x05-tweek-vs-craig',
						name: 'Tweek vs. Craig',
						season: 3,
						number: 5,
						airdate: '1999-06-23',
						airtime: '22:00',
						airstamp: '1999-06-24T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188927.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188927.jpg',
						},
						summary:
							'The boys take a shop class taught by an eccentric, and urge a schoolyard fight between classmates Tweek and Craig.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7954',
							},
						},
					},
					{
						id: 7955,
						url:
							'http://www.tvmaze.com/episodes/7955/south-park-3x06-sexual-harassment-panda',
						name: 'Sexual Harassment Panda',
						season: 3,
						number: 6,
						airdate: '1999-07-07',
						airtime: '22:00',
						airstamp: '1999-07-08T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188926.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188926.jpg',
						},
						summary: 'Cartman sues Stan for sexual harassment.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7955',
							},
						},
					},
					{
						id: 7956,
						url:
							'http://www.tvmaze.com/episodes/7956/south-park-3x07-cat-orgy',
						name: 'Cat Orgy',
						season: 3,
						number: 7,
						airdate: '1999-07-14',
						airtime: '22:00',
						airstamp: '1999-07-15T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188925.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188925.jpg',
						},
						summary: 'Shelly baby-sits Cartman.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7956',
							},
						},
					},
					{
						id: 7957,
						url:
							'http://www.tvmaze.com/episodes/7957/south-park-3x08-two-guys-naked-in-a-hot-tub',
						name: 'Two Guys Naked in a Hot Tub',
						season: 3,
						number: 8,
						airdate: '1999-07-21',
						airtime: '22:00',
						airstamp: '1999-07-22T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188924.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188924.jpg',
						},
						summary:
							'A meteor shower hits town, and Stan\'s sister Shelly babysits Cartman while Mrs. Cartman goes to a "meteor party."',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7957',
							},
						},
					},
					{
						id: 7958,
						url:
							'http://www.tvmaze.com/episodes/7958/south-park-3x09-jewbilee',
						name: 'Jewbilee',
						season: 3,
						number: 9,
						airdate: '1999-07-28',
						airtime: '22:00',
						airstamp: '1999-07-29T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188923.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188923.jpg',
						},
						summary:
							'Kyle and Ike go on a camping trip while South Park residents wait for a meteor shower to begin.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7958',
							},
						},
					},
					{
						id: 7959,
						url:
							'http://www.tvmaze.com/episodes/7959/south-park-3x10-korns-groovy-pirate-ghost-mystery',
						name: "Korn's Groovy Pirate Ghost Mystery",
						season: 3,
						number: 10,
						airdate: '1999-10-27',
						airtime: '22:00',
						airstamp: '1999-10-28T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188922.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188922.jpg',
						},
						summary:
							'On Halloween, the boys are plagued by fifth graders and the town is overrun by pirate ghosts. Music group Korn assists, and sings "Falling Away from Me."',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7959',
							},
						},
					},
					{
						id: 7960,
						url:
							'http://www.tvmaze.com/episodes/7960/south-park-3x11-chinpokomon',
						name: 'Chinpokomon',
						season: 3,
						number: 11,
						airdate: '1999-11-03',
						airtime: '22:00',
						airstamp: '1999-11-04T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188921.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188921.jpg',
						},
						summary:
							"Adults try to counter when the town's children become obsessed with a fad from Japan, whose government reveals their master plan behind the craze.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7960',
							},
						},
					},
					{
						id: 7961,
						url:
							'http://www.tvmaze.com/episodes/7961/south-park-3x12-hooked-on-monkey-fonics',
						name: 'Hooked on Monkey Fonics',
						season: 3,
						number: 12,
						airdate: '1999-11-10',
						airtime: '22:00',
						airstamp: '1999-11-11T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188920.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188920.jpg',
						},
						summary:
							"Kyle tries to teach his new rival about love; the boys compete against home-schooled kids in the annual spelling bee; and Cartman's mom agrees to teach him at home.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7961',
							},
						},
					},
					{
						id: 7962,
						url:
							'http://www.tvmaze.com/episodes/7962/south-park-3x13-starvin-marvin-in-space',
						name: "Starvin' Marvin in Space!",
						season: 3,
						number: 13,
						airdate: '1999-11-17',
						airtime: '22:00',
						airstamp: '1999-11-18T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188919.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188919.jpg',
						},
						summary:
							'Starvin Marvin returns in a stolen U.S. spaceship, and enlists the boys to help feed his Ethiopian village. The CIA is among their pursuers.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7962',
							},
						},
					},
					{
						id: 7963,
						url:
							'http://www.tvmaze.com/episodes/7963/south-park-3x14-the-red-badge-of-gayness-aka-war',
						name: 'The Red Badge of Gayness (a.k.a. War)',
						season: 3,
						number: 14,
						airdate: '1999-11-24',
						airtime: '22:00',
						airstamp: '1999-11-25T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188918.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188918.jpg',
						},
						summary:
							'The town holds its annual reenactment of a Civil War battle, and Cartman suits up for the Confederacy with visions of glory.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7963',
							},
						},
					},
					{
						id: 7964,
						url:
							'http://www.tvmaze.com/episodes/7964/south-park-3x15-mr-hankeys-christmas-classics',
						name: "Mr. Hankey's Christmas Classics",
						season: 3,
						number: 15,
						airdate: '1999-12-01',
						airtime: '22:00',
						airstamp: '1999-12-02T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188917.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188917.jpg',
						},
						summary:
							'Mr. Hankey and South Park citizens celebrate the holidays with musical numbers from his Christmas Classics Album.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7964',
							},
						},
					},
					{
						id: 7965,
						url:
							'http://www.tvmaze.com/episodes/7965/south-park-3x16-are-you-there-god-its-me-jesus',
						name: "Are You There God, It's Me Jesus",
						season: 3,
						number: 16,
						airdate: '1999-12-29',
						airtime: '22:00',
						airstamp: '1999-12-30T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188916.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188916.jpg',
						},
						summary:
							'"Are You There, God? It\'s Me, Jesus" purports to "answer age-old questions about who we are and what we\'re all about."',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7965',
							},
						},
					},
					{
						id: 7966,
						url:
							'http://www.tvmaze.com/episodes/7966/south-park-3x17-worldwide-recorder-concert-aka-the-brown-noise',
						name:
							'Worldwide Recorder Concert (a.k.a. The Brown Noise)',
						season: 3,
						number: 17,
						airdate: '2000-01-12',
						airtime: '22:00',
						airstamp: '2000-01-13T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188915.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188915.jpg',
						},
						summary:
							'The boys and their class travel to the first "Worldwide Recorder Concert" in Arkansas, where Mr. Garrison confronts the demons of his childhood while visiting his parents.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7966',
							},
						},
					},
					{
						id: 7967,
						url:
							'http://www.tvmaze.com/episodes/7967/south-park-4x01-the-tooth-fairys-tats-2000',
						name: "The Tooth Fairy's TATS 2000",
						season: 4,
						number: 1,
						airdate: '2000-04-05',
						airtime: '22:00',
						airstamp: '2000-04-06T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188914.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188914.jpg',
						},
						summary:
							"Cartman impersonates the Tooth Fairy when he learns there's money to be made from harvesting the teeth of underprivileged kids. However, the leader of a dentists' organization sets out to stop him.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7967',
							},
						},
					},
					{
						id: 7968,
						url:
							'http://www.tvmaze.com/episodes/7968/south-park-4x02-cartmans-silly-hate-crime-2000',
						name: "Cartman's Silly Hate Crime 2000",
						season: 4,
						number: 2,
						airdate: '2000-04-12',
						airtime: '22:00',
						airstamp: '2000-04-13T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188913.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188913.jpg',
						},
						summary:
							'Cartman is sentenced to juvenile hall and his friends plan to get him out. Meanwhile, he begins to adjust to life on the inside.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7968',
							},
						},
					},
					{
						id: 7969,
						url:
							'http://www.tvmaze.com/episodes/7969/south-park-4x03-timmy-2000',
						name: 'Timmy! 2000',
						season: 4,
						number: 3,
						airdate: '2000-04-19',
						airtime: '22:00',
						airstamp: '2000-04-20T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188912.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188912.jpg',
						},
						summary:
							'Mr. Mackey excuses Timmy from homework when he mistakenly thinks the boy is suffering from Attention Deficit Disorder; then Cartman and his friends try to develop the same affliction.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7969',
							},
						},
					},
					{
						id: 7970,
						url:
							'http://www.tvmaze.com/episodes/7970/south-park-4x04-quintuplets-2000',
						name: 'Quintuplets 2000',
						season: 4,
						number: 4,
						airdate: '2000-04-26',
						airtime: '22:00',
						airstamp: '2000-04-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188911.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188911.jpg',
						},
						summary:
							"The South Park media showers attention on a family with quintuplets that moves into the area, and Cartman befriends one of the new residents. Meanwhile, Kenny's mom tries to cash in on the excitement by planning a multiple birth of her own.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7970',
							},
						},
					},
					{
						id: 7971,
						url:
							'http://www.tvmaze.com/episodes/7971/south-park-4x05-cartman-joins-nambla',
						name: 'Cartman Joins NAMBLA',
						season: 4,
						number: 5,
						airdate: '2000-06-21',
						airtime: '22:00',
						airstamp: '2000-06-22T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/155988.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/155988.jpg',
						},
						summary:
							"Cartman seeks online companionship from older users after deciding that Stan, Kenny and Kyle aren't mature enough.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7971',
							},
						},
					},
					{
						id: 7972,
						url:
							'http://www.tvmaze.com/episodes/7972/south-park-4x06-cherokee-hair-tampons',
						name: 'Cherokee Hair Tampons',
						season: 4,
						number: 6,
						airdate: '2000-06-28',
						airtime: '22:00',
						airstamp: '2000-06-29T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188910.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188910.jpg',
						},
						summary:
							'Kyle suffers from a rare kidney disease and Cartman may be the only one who can save him, but at a high price.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7972',
							},
						},
					},
					{
						id: 7973,
						url:
							'http://www.tvmaze.com/episodes/7973/south-park-4x07-chef-goes-nanners',
						name: 'Chef Goes Nanners',
						season: 4,
						number: 7,
						airdate: '2000-07-05',
						airtime: '22:00',
						airstamp: '2000-07-06T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188909.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188909.jpg',
						},
						summary:
							'Chef protests against the South Park flag and ignites a town debate that even divides the kids. Meanwhile, Wendy becomes attracted to Cartman.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7973',
							},
						},
					},
					{
						id: 7974,
						url:
							'http://www.tvmaze.com/episodes/7974/south-park-4x08-something-you-can-do-with-your-finger-aka-fingerbang',
						name:
							'Something You Can Do with Your Finger (a.k.a. Fingerbang)',
						season: 4,
						number: 8,
						airdate: '2000-07-12',
						airtime: '22:00',
						airstamp: '2000-07-13T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188908.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188908.jpg',
						},
						summary:
							'Stan, Kyle, Kenny and Cartman form their own band and hold tryouts for a fifth member.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7974',
							},
						},
					},
					{
						id: 7975,
						url:
							'http://www.tvmaze.com/episodes/7975/south-park-4x09-do-the-handicapped-go-to-hell-1',
						name: 'Do the Handicapped Go to Hell? (1)',
						season: 4,
						number: 9,
						airdate: '2000-07-19',
						airtime: '22:00',
						airstamp: '2000-07-20T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188907.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188907.jpg',
						},
						summary:
							'The boys, scared by Priest Maxi\'s threats of eternal damnation, scramble to take part in Holy Communion and their first Confession in order to "save" themselves.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7975',
							},
						},
					},
					{
						id: 7976,
						url:
							'http://www.tvmaze.com/episodes/7976/south-park-4x10-probably-2',
						name: 'Probably (2)',
						season: 4,
						number: 10,
						airdate: '2000-07-26',
						airtime: '22:00',
						airstamp: '2000-07-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188906.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188906.jpg',
						},
						summary:
							"Satan can't decide between his new boyfriend and his former beau, Saddam Hussein. Meanwhile, Cartman has discovered his evangelical side and tries to ensure the gang a passage to heaven.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7976',
							},
						},
					},
					{
						id: 7977,
						url:
							'http://www.tvmaze.com/episodes/7977/south-park-4x11-fourth-grade',
						name: 'Fourth Grade',
						season: 4,
						number: 11,
						airdate: '2000-11-08',
						airtime: '22:00',
						airstamp: '2000-11-09T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188905.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188905.jpg',
						},
						summary:
							'The fearful boys speculate on the identity of their teacher as they begin the fourth grade, leading them to build a time machine to take them back to the safety of third grade.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7977',
							},
						},
					},
					{
						id: 7978,
						url:
							'http://www.tvmaze.com/episodes/7978/south-park-4x12-trapper-keeper',
						name: 'Trapper Keeper',
						season: 4,
						number: 12,
						airdate: '2000-11-15',
						airtime: '22:00',
						airstamp: '2000-11-16T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188904.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188904.jpg',
						},
						summary:
							'Mr. Garrison orders a recount when the race for kindergarten president is too close to call. Meanwhile, a life form from the future appears in the school yard at South Park Elementary.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7978',
							},
						},
					},
					{
						id: 7979,
						url:
							'http://www.tvmaze.com/episodes/7979/south-park-4x13-helen-keller-the-musical',
						name: 'Helen Keller! The Musical',
						season: 4,
						number: 13,
						airdate: '2000-11-22',
						airtime: '22:00',
						airstamp: '2000-11-23T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188903.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188903.jpg',
						},
						summary:
							'The boys work on a Thanksgiving pageant about Helen Keller and decide to use a turkey instead of a dog.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7979',
							},
						},
					},
					{
						id: 7980,
						url:
							'http://www.tvmaze.com/episodes/7980/south-park-4x14-pip-aka-great-expectations',
						name: 'Pip (a.k.a. Great Expectations)',
						season: 4,
						number: 14,
						airdate: '2000-11-29',
						airtime: '22:00',
						airstamp: '2000-11-30T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188902.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188902.jpg',
						},
						summary:
							'The boys\' British classmate, Pip, stars in this spoof of Dickens\' classic "Great Expectations," set in London.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7980',
							},
						},
					},
					{
						id: 7981,
						url:
							'http://www.tvmaze.com/episodes/7981/south-park-4x15-fat-camp',
						name: 'Fat Camp',
						season: 4,
						number: 15,
						airdate: '2000-12-06',
						airtime: '22:00',
						airstamp: '2000-12-07T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188901.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188901.jpg',
						},
						summary:
							'Cartman is sent to a camp for obese youngsters by concerned family and friends. Meanwhile, Kenny has his own hit TV show, "Krazy Kenny." Also, Chef talks to the boys about prostitution.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7981',
							},
						},
					},
					{
						id: 7982,
						url:
							'http://www.tvmaze.com/episodes/7982/south-park-4x16-the-wacky-molestation-adventure',
						name: 'The Wacky Molestation Adventure',
						season: 4,
						number: 16,
						airdate: '2000-12-13',
						airtime: '22:00',
						airstamp: '2000-12-14T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188900.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188900.jpg',
						},
						summary:
							"Cartman becomes South Park's mayor when the kids take over the town.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7982',
							},
						},
					},
					{
						id: 7983,
						url:
							'http://www.tvmaze.com/episodes/7983/south-park-4x17-a-very-crappy-christmas',
						name: 'A Very Crappy Christmas',
						season: 4,
						number: 17,
						airdate: '2000-12-20',
						airtime: '22:00',
						airstamp: '2000-12-21T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188899.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188899.jpg',
						},
						summary:
							"The boys make a video Christmas card when Mr. Hankey's visit is delayed.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7983',
							},
						},
					},
					{
						id: 7984,
						url:
							'http://www.tvmaze.com/episodes/7984/south-park-5x01-it-hits-the-fan',
						name: 'It Hits the Fan',
						season: 5,
						number: 1,
						airdate: '2001-06-20',
						airtime: '22:00',
						airstamp: '2001-06-21T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188897.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188897.jpg',
						},
						summary:
							'The boys realize they may have made history of some sort when Cartman utters an expletive.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7984',
							},
						},
					},
					{
						id: 7985,
						url:
							'http://www.tvmaze.com/episodes/7985/south-park-5x02-cripple-fight',
						name: 'Cripple Fight',
						season: 5,
						number: 2,
						airdate: '2001-06-27',
						airtime: '22:00',
						airstamp: '2001-06-28T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188896.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188896.jpg',
						},
						summary:
							'The boys join the Mountain Scouts with Timmy, who winds up in a fight with Jimmy in a supermarket parking lot.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7985',
							},
						},
					},
					{
						id: 7986,
						url:
							'http://www.tvmaze.com/episodes/7986/south-park-5x03-super-best-friends',
						name: 'Super Best Friends',
						season: 5,
						number: 3,
						airdate: '2001-07-04',
						airtime: '22:00',
						airstamp: '2001-07-05T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188895.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188895.jpg',
						},
						summary:
							'A magician persuades Kenny, Cartman and Kyle to join his cult, and their journey lands them in Washington, D.C.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7986',
							},
						},
					},
					{
						id: 7987,
						url:
							'http://www.tvmaze.com/episodes/7987/south-park-5x04-scott-tenorman-must-die',
						name: 'Scott Tenorman Must Die',
						season: 5,
						number: 4,
						airdate: '2001-07-11',
						airtime: '22:00',
						airstamp: '2001-07-12T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/61/153629.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/61/153629.jpg',
						},
						summary:
							"Radiohead plays a role in Cartman's plan for revenge against an eighth-grader who wronged him.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7987',
							},
						},
					},
					{
						id: 7988,
						url:
							'http://www.tvmaze.com/episodes/7988/south-park-5x05-terrance-and-phillip-behind-the-blow',
						name: 'Terrance and Phillip: Behind the Blow',
						season: 5,
						number: 5,
						airdate: '2001-07-18',
						airtime: '22:00',
						airstamp: '2001-07-19T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188894.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188894.jpg',
						},
						summary:
							'The boys are devastated to learn that their heroes Terrence and Phillip have broken up.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7988',
							},
						},
					},
					{
						id: 7989,
						url:
							'http://www.tvmaze.com/episodes/7989/south-park-5x06-cartmanland',
						name: 'Cartmanland',
						season: 5,
						number: 6,
						airdate: '2001-07-25',
						airtime: '22:00',
						airstamp: '2001-07-26T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188892.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188892.jpg',
						},
						summary:
							'Cartman uses his $1 million inheritance to open his own amusement park.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7989',
							},
						},
					},
					{
						id: 7990,
						url:
							'http://www.tvmaze.com/episodes/7990/south-park-5x07-proper-condom-use',
						name: 'Proper Condom Use',
						season: 5,
						number: 7,
						airdate: '2001-08-01',
						airtime: '22:00',
						airstamp: '2001-08-02T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188891.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188891.jpg',
						},
						summary:
							'The impulsive implementation of sex-education classes at school leads to an all-out battle between the boys and the girls.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7990',
							},
						},
					},
					{
						id: 7991,
						url:
							'http://www.tvmaze.com/episodes/7991/south-park-5x08-towelie',
						name: 'Towelie',
						season: 5,
						number: 8,
						airdate: '2001-08-08',
						airtime: '22:00',
						airstamp: '2001-08-09T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188887.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188887.jpg',
						},
						summary:
							'The gang tries to protect a new resident in South Park from the government.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7991',
							},
						},
					},
					{
						id: 7992,
						url:
							'http://www.tvmaze.com/episodes/7992/south-park-5x09-osama-bin-laden-has-farty-pants',
						name: 'Osama Bin Laden Has Farty Pants',
						season: 5,
						number: 9,
						airdate: '2001-11-07',
						airtime: '22:00',
						airstamp: '2001-11-08T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188886.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188886.jpg',
						},
						summary:
							"The boys decide to get into the patriotic spirit by heeding the President's advice to send money to the children of Afghanistan. But their spirits sour when they receive a package back and their mail becomes the focus of Government investigators.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7992',
							},
						},
					},
					{
						id: 7993,
						url:
							'http://www.tvmaze.com/episodes/7993/south-park-5x10-how-to-eat-with-your-butt',
						name: 'How to Eat with Your Butt',
						season: 5,
						number: 10,
						airdate: '2001-11-14',
						airtime: '22:00',
						airstamp: '2001-11-15T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188884.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188884.jpg',
						},
						summary:
							"As a prank, Cartman somehow gets Kenny's picture pasted on milk cartons as a missing child, which soon backfires on him.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7993',
							},
						},
					},
					{
						id: 7994,
						url:
							'http://www.tvmaze.com/episodes/7994/south-park-5x11-the-entity-aka-the-ginger-device',
						name: 'The Entity (a.k.a. The Ginger Device)',
						season: 5,
						number: 11,
						airdate: '2001-11-21',
						airtime: '22:00',
						airstamp: '2001-11-22T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188883.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188883.jpg',
						},
						summary:
							'Kyle is embarrassed by his cousin, Kyle, and tries to think of ways to avoid him in front of his friends.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7994',
							},
						},
					},
					{
						id: 7995,
						url:
							'http://www.tvmaze.com/episodes/7995/south-park-5x12-here-comes-the-neighborhood',
						name: 'Here Comes the Neighborhood',
						season: 5,
						number: 12,
						airdate: '2001-11-28',
						airtime: '22:00',
						airstamp: '2001-11-29T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/61/153630.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/61/153630.jpg',
						},
						summary:
							"Kyle, Stan, Kenny and Cartman have a run-in with Token, the town's only rich kid. In retaliation, Token encourages other wealthy people to move into the neighborhood.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7995',
							},
						},
					},
					{
						id: 7996,
						url:
							'http://www.tvmaze.com/episodes/7996/south-park-5x13-kenny-dies',
						name: 'Kenny Dies',
						season: 5,
						number: 13,
						airdate: '2001-12-05',
						airtime: '22:00',
						airstamp: '2001-12-06T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188882.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188882.jpg',
						},
						summary:
							'Cartman discovers the benefits of stem-cell research.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7996',
							},
						},
					},
					{
						id: 7997,
						url:
							'http://www.tvmaze.com/episodes/7997/south-park-5x14-butters-very-own-episode',
						name: "Butters' Very Own Episode",
						season: 5,
						number: 14,
						airdate: '2001-12-12',
						airtime: '22:00',
						airstamp: '2001-12-13T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188881.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188881.jpg',
						},
						summary:
							"Butters looks forward to his parents' anniversary dinner despite his mother's reaction to his father's secret extracurricular activities.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7997',
							},
						},
					},
					{
						id: 7998,
						url:
							'http://www.tvmaze.com/episodes/7998/south-park-6x01-jared-has-aides',
						name: 'Jared Has Aides',
						season: 6,
						number: 1,
						airdate: '2002-03-06',
						airtime: '22:00',
						airstamp: '2002-03-07T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188880.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188880.jpg',
						},
						summary:
							"The gang seizes upon an opportunity to make money with a weight-loss program that's sweeping the country.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7998',
							},
						},
					},
					{
						id: 7999,
						url:
							'http://www.tvmaze.com/episodes/7999/south-park-6x02-asspen',
						name: 'Asspen',
						season: 6,
						number: 2,
						airdate: '2002-03-13',
						airtime: '22:00',
						airstamp: '2002-03-14T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188879.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188879.jpg',
						},
						summary:
							"The boys head to Aspen, where the slopes are superb and Stan gets into a showdown with the lodge's expert skier.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/7999',
							},
						},
					},
					{
						id: 8000,
						url:
							'http://www.tvmaze.com/episodes/8000/south-park-6x03-freak-strike',
						name: 'Freak Strike',
						season: 6,
						number: 3,
						airdate: '2002-03-20',
						airtime: '22:00',
						airstamp: '2002-03-21T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/58/146529.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/58/146529.jpg',
						},
						summary:
							'The gang decides to put Butters up as a guest on a talk show thinking that they will get special favors.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8000',
							},
						},
					},
					{
						id: 8001,
						url:
							'http://www.tvmaze.com/episodes/8001/south-park-6x04-fun-with-veal',
						name: 'Fun with Veal',
						season: 6,
						number: 4,
						airdate: '2002-03-27',
						airtime: '22:00',
						airstamp: '2002-03-28T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188874.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188874.jpg',
						},
						summary:
							'After learning how veal is made, the boys try to save some calves from the slaughterhouse.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8001',
							},
						},
					},
					{
						id: 8002,
						url:
							'http://www.tvmaze.com/episodes/8002/south-park-6x05-the-new-terrance-and-phillip-movie-trailer',
						name: 'The New Terrance and Phillip Movie Trailer',
						season: 6,
						number: 5,
						airdate: '2002-04-03',
						airtime: '22:00',
						airstamp: '2002-04-04T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188873.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188873.jpg',
						},
						summary:
							'The boys look forward to the newest Terrance and Phillip movie.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8002',
							},
						},
					},
					{
						id: 8003,
						url:
							'http://www.tvmaze.com/episodes/8003/south-park-6x06-professor-chaos',
						name: 'Professor Chaos',
						season: 6,
						number: 6,
						airdate: '2002-04-10',
						airtime: '22:00',
						airstamp: '2002-04-11T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/156993.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/156993.jpg',
						},
						summary:
							'When Butters is rejected by the kids, his alter ego Professor Chaos is unleashed.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8003',
							},
						},
					},
					{
						id: 8004,
						url:
							'http://www.tvmaze.com/episodes/8004/south-park-6x07-the-simpsons-already-did-it',
						name: 'The Simpsons Already Did It',
						season: 6,
						number: 7,
						airdate: '2002-06-26',
						airtime: '22:00',
						airstamp: '2002-06-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/157057.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/157057.jpg',
						},
						summary:
							'Cartman and the gang fear that they may have accidentally caused a death.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8004',
							},
						},
					},
					{
						id: 8005,
						url:
							'http://www.tvmaze.com/episodes/8005/south-park-6x08-red-hot-catholic-love',
						name: 'Red Hot Catholic Love',
						season: 6,
						number: 8,
						airdate: '2002-07-03',
						airtime: '22:00',
						airstamp: '2002-07-04T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188872.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188872.jpg',
						},
						summary:
							'A priest visits South Park to find out why church attendance is down; the boys protest the tinkering of their favorite movies.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8005',
							},
						},
					},
					{
						id: 8006,
						url:
							'http://www.tvmaze.com/episodes/8006/south-park-6x09-free-hat',
						name: 'Free Hat',
						season: 6,
						number: 9,
						airdate: '2002-07-10',
						airtime: '22:00',
						airstamp: '2002-07-11T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188871.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188871.jpg',
						},
						summary:
							'The boys try to prevent filmmakers from remaking their movies, but their efforts are mistaken for a campaign for the release of an infamous criminal.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8006',
							},
						},
					},
					{
						id: 8007,
						url:
							'http://www.tvmaze.com/episodes/8007/south-park-6x10-bebes-boobs-destroy-society',
						name: "Bebe's Boobs Destroy Society",
						season: 6,
						number: 10,
						airdate: '2002-07-17',
						airtime: '22:00',
						airstamp: '2002-07-18T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188870.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188870.jpg',
						},
						summary:
							'When Bebe starts to mature physically, the boys behave so boorishly that their friendships are almost ruined.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8007',
							},
						},
					},
					{
						id: 8008,
						url:
							'http://www.tvmaze.com/episodes/8008/south-park-6x11-child-abduction-is-not-funny',
						name: 'Child Abduction is Not Funny',
						season: 6,
						number: 11,
						airdate: '2002-07-24',
						airtime: '22:00',
						airstamp: '2002-07-25T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188869.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188869.jpg',
						},
						summary:
							'Media stories about kidnappings drive South Park parents to extreme measures, such as building a wall around the town to keep out predators.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8008',
							},
						},
					},
					{
						id: 8009,
						url:
							'http://www.tvmaze.com/episodes/8009/south-park-6x12-a-ladder-to-heaven',
						name: 'A Ladder to Heaven',
						season: 6,
						number: 12,
						airdate: '2002-11-06',
						airtime: '22:00',
						airstamp: '2002-11-07T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/64/161252.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/64/161252.jpg',
						},
						summary:
							'Trying to find Kenny in Heaven, the boys discover that Saddam Hussein may have hidden weapons there.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8009',
							},
						},
					},
					{
						id: 8010,
						url:
							'http://www.tvmaze.com/episodes/8010/south-park-6x13-the-return-of-the-fellowship-of-the-ring-to-the-two-towers',
						name:
							'The Return of the Fellowship of the Ring to the Two Towers',
						season: 6,
						number: 13,
						airdate: '2002-11-13',
						airtime: '22:00',
						airstamp: '2002-11-14T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188868.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188868.jpg',
						},
						summary:
							'While returning "The Lord of the Rings" to the video store, the boys accidentally get a hold of a steamy porno tape.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8010',
							},
						},
					},
					{
						id: 8011,
						url:
							'http://www.tvmaze.com/episodes/8011/south-park-6x14-death-camp-of-tolerance',
						name: 'Death Camp of Tolerance',
						season: 6,
						number: 14,
						airdate: '2002-11-20',
						airtime: '22:00',
						airstamp: '2002-11-21T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188867.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188867.jpg',
						},
						summary:
							'The boys are sent to a camp where cultural sensitivity is taught.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8011',
							},
						},
					},
					{
						id: 8012,
						url:
							'http://www.tvmaze.com/episodes/8012/south-park-6x15-the-biggest-douche-in-the-universe',
						name: 'The Biggest Douche in the Universe',
						season: 6,
						number: 15,
						airdate: '2002-11-27',
						airtime: '22:00',
						airstamp: '2002-11-28T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188866.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188866.jpg',
						},
						summary:
							"Cartman takes desperate measures to try to rid himself of Kenny's spirit, including traveling to Scotland.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8012',
							},
						},
					},
					{
						id: 8013,
						url:
							'http://www.tvmaze.com/episodes/8013/south-park-6x16-my-future-self-n-me',
						name: "My Future Self 'n' Me",
						season: 6,
						number: 16,
						airdate: '2002-12-04',
						airtime: '22:00',
						airstamp: '2002-12-05T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188865.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188865.jpg',
						},
						summary:
							'Stan is forced to look at his life 30 years in the future; Cartman tries to launch a new business.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8013',
							},
						},
					},
					{
						id: 8014,
						url:
							'http://www.tvmaze.com/episodes/8014/south-park-6x17-red-sleigh-down',
						name: 'Red Sleigh Down',
						season: 6,
						number: 17,
						airdate: '2002-12-11',
						airtime: '22:00',
						airstamp: '2002-12-12T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188864.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188864.jpg',
						},
						summary:
							'Cartman tries to score some points with Santa Claus by asking him to deliver presents to the needy children in Iraq.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8014',
							},
						},
					},
					{
						id: 8015,
						url:
							'http://www.tvmaze.com/episodes/8015/south-park-7x01-cancelled',
						name: 'Cancelled',
						season: 7,
						number: 1,
						airdate: '2003-03-19',
						airtime: '22:00',
						airstamp: '2003-03-20T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188702.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188702.jpg',
						},
						summary:
							'The boys are abducted by aliens, who inform them that Earth is actually a reality show that is about to be canceled by intergalactic media moguls.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8015',
							},
						},
					},
					{
						id: 8016,
						url:
							'http://www.tvmaze.com/episodes/8016/south-park-7x02-krazy-kripples',
						name: 'Krazy Kripples',
						season: 7,
						number: 2,
						airdate: '2003-03-26',
						airtime: '22:00',
						airstamp: '2003-03-27T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188701.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188701.jpg',
						},
						summary:
							'The kids become embroiled in the life of a disabled celebrity who breezes through town and gets all the attention.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8016',
							},
						},
					},
					{
						id: 8017,
						url:
							'http://www.tvmaze.com/episodes/8017/south-park-7x03-toilet-paper',
						name: 'Toilet Paper',
						season: 7,
						number: 3,
						airdate: '2003-04-02',
						airtime: '22:00',
						airstamp: '2003-04-03T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188700.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188700.jpg',
						},
						summary:
							"The boys are under investigation for covering their teacher's house with toilet paper.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8017',
							},
						},
					},
					{
						id: 8018,
						url:
							'http://www.tvmaze.com/episodes/8018/south-park-7x04-im-a-little-bit-country',
						name: "I'm a Little Bit Country",
						season: 7,
						number: 4,
						airdate: '2003-04-09',
						airtime: '22:00',
						airstamp: '2003-04-10T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188699.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188699.jpg',
						},
						summary:
							'The foul-mouthed youngsters return for a seventh season.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8018',
							},
						},
					},
					{
						id: 8019,
						url:
							'http://www.tvmaze.com/episodes/8019/south-park-7x05-fat-butt-and-pancake-head',
						name: 'Fat Butt and Pancake Head',
						season: 7,
						number: 5,
						airdate: '2003-04-16',
						airtime: '22:00',
						airstamp: '2003-04-17T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188696.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188696.jpg',
						},
						summary: 'Jennifer Lopez and Ben Affleck come to town.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8019',
							},
						},
					},
					{
						id: 8020,
						url:
							'http://www.tvmaze.com/episodes/8020/south-park-7x06-lil-crime-stoppers',
						name: "Lil' Crime Stoppers",
						season: 7,
						number: 6,
						airdate: '2003-04-23',
						airtime: '22:00',
						airstamp: '2003-04-24T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188695.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188695.jpg',
						},
						summary: 'The guys start their own detective agency.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8020',
							},
						},
					},
					{
						id: 8021,
						url:
							'http://www.tvmaze.com/episodes/8021/south-park-7x07-red-mans-greed',
						name: "Red Man's Greed",
						season: 7,
						number: 7,
						airdate: '2003-04-30',
						airtime: '22:00',
						airstamp: '2003-05-01T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/67/168626.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/67/168626.jpg',
						},
						summary:
							'The boys try to save the town from developers.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8021',
							},
						},
					},
					{
						id: 8022,
						url:
							'http://www.tvmaze.com/episodes/8022/south-park-7x08-south-park-is-gay',
						name: 'South Park is Gay!',
						season: 7,
						number: 8,
						airdate: '2003-10-22',
						airtime: '22:00',
						airstamp: '2003-10-23T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188694.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188694.jpg',
						},
						summary:
							"The whole town suddenly discovers it's all the rage to be gay.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8022',
							},
						},
					},
					{
						id: 8023,
						url:
							'http://www.tvmaze.com/episodes/8023/south-park-7x09-christian-rock-hard',
						name: 'Christian Rock Hard',
						season: 7,
						number: 9,
						airdate: '2003-10-29',
						airtime: '22:00',
						airstamp: '2003-10-30T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188682.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188682.jpg',
						},
						summary:
							'Cartman puts together a band; Stan, Kyle and Kenny get into trouble for downloading music from the Internet.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8023',
							},
						},
					},
					{
						id: 8024,
						url:
							'http://www.tvmaze.com/episodes/8024/south-park-7x10-grey-dawn',
						name: 'Grey Dawn',
						season: 7,
						number: 10,
						airdate: '2003-11-05',
						airtime: '22:00',
						airstamp: '2003-11-06T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188681.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188681.jpg',
						},
						summary:
							"The boys try to have South Park's senior citizens stripped of their driver's licenses after they go on a dangerous rampage.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8024',
							},
						},
					},
					{
						id: 8025,
						url:
							'http://www.tvmaze.com/episodes/8025/south-park-7x11-casa-bonita',
						name: 'Casa Bonita',
						season: 7,
						number: 11,
						airdate: '2003-11-12',
						airtime: '22:00',
						airstamp: '2003-11-13T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188680.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188680.jpg',
						},
						summary:
							"Cartman seeks revenge for not being invited to Kyle's birthday outing.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8025',
							},
						},
					},
					{
						id: 8026,
						url:
							'http://www.tvmaze.com/episodes/8026/south-park-7x12-all-about-the-mormons',
						name: 'All About the Mormons?',
						season: 7,
						number: 12,
						airdate: '2003-11-19',
						airtime: '22:00',
						airstamp: '2003-11-20T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188678.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188678.jpg',
						},
						summary:
							'Mormon neighbors move into town, causing the citizens of South Park to become Mormons themselves.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8026',
							},
						},
					},
					{
						id: 8027,
						url:
							'http://www.tvmaze.com/episodes/8027/south-park-7x13-butt-out',
						name: 'Butt Out',
						season: 7,
						number: 13,
						airdate: '2003-12-03',
						airtime: '22:00',
						airstamp: '2003-12-04T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188677.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188677.jpg',
						},
						summary:
							'The guys rebel after an anti-smoking campaign begins at their school.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8027',
							},
						},
					},
					{
						id: 8028,
						url:
							'http://www.tvmaze.com/episodes/8028/south-park-7x14-raisins',
						name: 'Raisins',
						season: 7,
						number: 14,
						airdate: '2003-12-10',
						airtime: '22:00',
						airstamp: '2003-12-11T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188676.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188676.jpg',
						},
						summary:
							"When Stan's girlfriend breaks up with him, his friends try to cheer him up by bringing him to a local restaurant where lovely ladies hang out.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8028',
							},
						},
					},
					{
						id: 8029,
						url:
							'http://www.tvmaze.com/episodes/8029/south-park-7x15-its-christmas-in-canada',
						name: "It's Christmas in Canada",
						season: 7,
						number: 15,
						airdate: '2003-12-17',
						airtime: '22:00',
						airstamp: '2003-12-18T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188675.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188675.jpg',
						},
						summary:
							"Ike's Canadian birth parents come back to claim him, prompting the residents of South Park to collect money to get him back.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8029',
							},
						},
					},
					{
						id: 8030,
						url:
							'http://www.tvmaze.com/episodes/8030/south-park-8x01-good-times-with-weapons',
						name: 'Good Times with Weapons',
						season: 8,
						number: 1,
						airdate: '2004-03-17',
						airtime: '22:00',
						airstamp: '2004-03-18T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188673.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188673.jpg',
						},
						summary:
							'After buying some martial arts objects at a market, the boys turn into Japanese warriors to take on their enemy, Prof. Chaos.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8030',
							},
						},
					},
					{
						id: 8031,
						url:
							'http://www.tvmaze.com/episodes/8031/south-park-8x02-up-the-down-steroid',
						name: 'Up the Down Steroid',
						season: 8,
						number: 2,
						airdate: '2004-03-24',
						airtime: '22:00',
						airstamp: '2004-03-25T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188672.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188672.jpg',
						},
						summary:
							'Steroids become an issue as Timmy, Jimmy and Cartman train for a sporting event.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8031',
							},
						},
					},
					{
						id: 8032,
						url:
							'http://www.tvmaze.com/episodes/8032/south-park-8x03-the-passion-of-the-jew',
						name: 'The Passion of the Jew',
						season: 8,
						number: 3,
						airdate: '2004-03-31',
						airtime: '22:00',
						airstamp: '2004-04-01T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188671.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188671.jpg',
						},
						summary:
							'"The Passion of the Christ" has an unusual effect on Stan, Cartman, Kyle and Kenny.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8032',
							},
						},
					},
					{
						id: 8033,
						url:
							'http://www.tvmaze.com/episodes/8033/south-park-8x04-you-got-fked-in-the-ass',
						name: 'You Got F**ked in the Ass',
						season: 8,
						number: 4,
						airdate: '2004-04-07',
						airtime: '22:00',
						airstamp: '2004-04-08T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188670.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188670.jpg',
						},
						summary:
							'Stan tries to put together a group of competitive dancers to challenge some rivals from Orange County.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8033',
							},
						},
					},
					{
						id: 8034,
						url:
							'http://www.tvmaze.com/episodes/8034/south-park-8x05-awesom-o',
						name: 'AWESOM-O',
						season: 8,
						number: 5,
						airdate: '2004-04-14',
						airtime: '22:00',
						airstamp: '2004-04-15T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/156246.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/156246.jpg',
						},
						summary:
							'Cartman disguises himself as a robot so he can learn secrets about Butters to use against him.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8034',
							},
						},
					},
					{
						id: 8035,
						url:
							'http://www.tvmaze.com/episodes/8035/south-park-8x06-the-jeffersons',
						name: 'The Jeffersons',
						season: 8,
						number: 6,
						airdate: '2004-04-21',
						airtime: '22:00',
						airstamp: '2004-04-22T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/155506.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/155506.jpg',
						},
						summary:
							'A mysterious gentleman and his son create controversy in South Park.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8035',
							},
						},
					},
					{
						id: 8036,
						url:
							'http://www.tvmaze.com/episodes/8036/south-park-8x07-goobacks',
						name: 'Goobacks',
						season: 8,
						number: 7,
						airdate: '2004-04-28',
						airtime: '22:00',
						airstamp: '2004-04-29T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188669.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188669.jpg',
						},
						summary:
							'South Park becomes flooded with time travelers from the future.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8036',
							},
						},
					},
					{
						id: 8037,
						url:
							'http://www.tvmaze.com/episodes/8037/south-park-8x08-douche-and-turd',
						name: 'Douche and Turd',
						season: 8,
						number: 8,
						airdate: '2004-10-27',
						airtime: '22:00',
						airstamp: '2004-10-28T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188668.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188668.jpg',
						},
						summary:
							'The kids have to choose a new mascot after an animal-rights group protests.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8037',
							},
						},
					},
					{
						id: 8038,
						url:
							'http://www.tvmaze.com/episodes/8038/south-park-8x09-something-wall-mart-this-way-comes',
						name: 'Something Wall-Mart This Way Comes',
						season: 8,
						number: 9,
						airdate: '2004-11-03',
						airtime: '22:00',
						airstamp: '2004-11-04T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188667.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188667.jpg',
						},
						summary:
							'South Park is invaded by a giant shopping center that threatens the quiet little town.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8038',
							},
						},
					},
					{
						id: 8039,
						url:
							'http://www.tvmaze.com/episodes/8039/south-park-8x10-pre-school',
						name: 'Pre-School',
						season: 8,
						number: 10,
						airdate: '2004-11-10',
						airtime: '22:00',
						airstamp: '2004-11-11T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188663.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188663.jpg',
						},
						summary:
							'Cartman, Butters, Kenny, Stan and Kyle fear that a secret may get out when an old adversary turns up in town.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8039',
							},
						},
					},
					{
						id: 8040,
						url:
							'http://www.tvmaze.com/episodes/8040/south-park-8x11-quest-for-ratings',
						name: 'Quest for Ratings',
						season: 8,
						number: 11,
						airdate: '2004-11-17',
						airtime: '22:00',
						airstamp: '2004-11-18T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188662.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188662.jpg',
						},
						summary:
							"Cartman becomes a network honcho when he and the boys launch a morning news show on the school's closed-circuit TV station.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8040',
							},
						},
					},
					{
						id: 8041,
						url:
							'http://www.tvmaze.com/episodes/8041/south-park-8x12-stupid-spoiled-whore-video-playset',
						name: 'Stupid Spoiled Whore Video Playset',
						season: 8,
						number: 12,
						airdate: '2004-12-01',
						airtime: '22:00',
						airstamp: '2004-12-02T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188660.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188660.jpg',
						},
						summary:
							'South Park is abuzz over a visit from a famous socialite.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8041',
							},
						},
					},
					{
						id: 8042,
						url:
							'http://www.tvmaze.com/episodes/8042/south-park-8x13-cartmans-incredible-gift',
						name: "Cartman's Incredible Gift",
						season: 8,
						number: 13,
						airdate: '2004-12-08',
						airtime: '22:00',
						airstamp: '2004-12-09T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188659.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188659.jpg',
						},
						summary:
							"Cartman is imbued with the power to see into the future after he's hit on the head.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8042',
							},
						},
					},
					{
						id: 8043,
						url:
							'http://www.tvmaze.com/episodes/8043/south-park-8x14-woodland-critter-christmas',
						name: 'Woodland Critter Christmas',
						season: 8,
						number: 14,
						airdate: '2004-12-15',
						airtime: '22:00',
						airstamp: '2004-12-16T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188658.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188658.jpg',
						},
						summary:
							'Woodland creatures ask Stan to help them build a manger.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8043',
							},
						},
					},
					{
						id: 8044,
						url:
							'http://www.tvmaze.com/episodes/8044/south-park-9x01-mr-garrisons-fancy-new-vagina',
						name: "Mr. Garrison's Fancy New Vagina",
						season: 9,
						number: 1,
						airdate: '2005-03-09',
						airtime: '22:00',
						airstamp: '2005-03-10T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188657.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188657.jpg',
						},
						summary:
							'In the season 9 premiere, Mr. Garrison looks to become a woman, and Kyle works in improving his basketball skills. ',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8044',
							},
						},
					},
					{
						id: 8045,
						url:
							'http://www.tvmaze.com/episodes/8045/south-park-9x02-die-hippie-die',
						name: 'Die Hippie, Die',
						season: 9,
						number: 2,
						airdate: '2005-03-16',
						airtime: '22:00',
						airstamp: '2005-03-17T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188656.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188656.jpg',
						},
						summary:
							"Hippies, the bane of Cartman's existence, threaten to overrun South Park when they plan a weeklong music festival in town.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8045',
							},
						},
					},
					{
						id: 8046,
						url:
							'http://www.tvmaze.com/episodes/8046/south-park-9x03-wing',
						name: 'Wing',
						season: 9,
						number: 3,
						airdate: '2005-03-23',
						airtime: '22:00',
						airstamp: '2005-03-24T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188653.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188653.jpg',
						},
						summary:
							'Cartman, Kenny, Stan and Kyle become talent agents with one client.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8046',
							},
						},
					},
					{
						id: 8047,
						url:
							'http://www.tvmaze.com/episodes/8047/south-park-9x04-best-friends-forever',
						name: 'Best Friends Forever',
						season: 9,
						number: 4,
						airdate: '2005-03-30',
						airtime: '22:00',
						airstamp: '2005-03-31T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188652.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188652.jpg',
						},
						summary:
							"Kenny is able to purchase a gaming device that's been sold out, straining his friendship with Cartman.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8047',
							},
						},
					},
					{
						id: 8048,
						url:
							'http://www.tvmaze.com/episodes/8048/south-park-9x05-the-losing-edge',
						name: 'The Losing Edge',
						season: 9,
						number: 5,
						airdate: '2005-04-06',
						airtime: '22:00',
						airstamp: '2005-04-07T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188650.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188650.jpg',
						},
						summary:
							'The boys become bored with baseball after a long winning streak.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8048',
							},
						},
					},
					{
						id: 8049,
						url:
							'http://www.tvmaze.com/episodes/8049/south-park-9x06-the-death-of-eric-cartman',
						name: 'The Death of Eric Cartman',
						season: 9,
						number: 6,
						airdate: '2005-04-13',
						airtime: '22:00',
						airstamp: '2005-04-14T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188649.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188649.jpg',
						},
						summary: 'Butters believes he can talk to the dead.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8049',
							},
						},
					},
					{
						id: 8050,
						url:
							'http://www.tvmaze.com/episodes/8050/south-park-9x07-erection-day',
						name: 'Erection Day',
						season: 9,
						number: 7,
						airdate: '2005-04-20',
						airtime: '22:00',
						airstamp: '2005-04-21T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188648.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188648.jpg',
						},
						summary:
							'Jimmy has trouble controlling his hormones right before the big talent show.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8050',
							},
						},
					},
					{
						id: 8051,
						url:
							'http://www.tvmaze.com/episodes/8051/south-park-9x08-two-days-before-the-day-after-tomorrow',
						name: 'Two Days Before the Day After Tomorrow',
						season: 9,
						number: 8,
						airdate: '2005-10-19',
						airtime: '22:00',
						airstamp: '2005-10-20T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188647.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188647.jpg',
						},
						summary:
							'The town of Beaverton is flooded when a mammoth beaver dam breaks. Is global warming to blame? Only Stan and Cartman know for sure.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8051',
							},
						},
					},
					{
						id: 8052,
						url:
							'http://www.tvmaze.com/episodes/8052/south-park-9x09-marjorine',
						name: 'Marjorine',
						season: 9,
						number: 9,
						airdate: '2005-10-26',
						airtime: '22:00',
						airstamp: '2005-10-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188645.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188645.jpg',
						},
						summary:
							"The boys decide to fake Butters' death and resurrect him as a girl.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8052',
							},
						},
					},
					{
						id: 8053,
						url:
							'http://www.tvmaze.com/episodes/8053/south-park-9x10-follow-that-egg',
						name: 'Follow That Egg',
						season: 9,
						number: 10,
						airdate: '2005-11-02',
						airtime: '22:00',
						airstamp: '2005-11-03T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188619.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188619.jpg',
						},
						summary:
							'Townsfolk rally against gay marriage, especially Mr. Garrison, whose ex Mr. Slave plans to wed Big Gay Al.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8053',
							},
						},
					},
					{
						id: 8054,
						url:
							'http://www.tvmaze.com/episodes/8054/south-park-9x11-ginger-kids',
						name: 'Ginger Kids',
						season: 9,
						number: 11,
						airdate: '2005-11-09',
						airtime: '22:00',
						airstamp: '2005-11-10T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188618.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188618.jpg',
						},
						summary:
							'Ostracized for his appearance because of a case of "gingervitus," Cartman goes on a campaign against discrimination.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8054',
							},
						},
					},
					{
						id: 8055,
						url:
							'http://www.tvmaze.com/episodes/8055/south-park-9x12-trapped-in-the-closet',
						name: 'Trapped in the Closet',
						season: 9,
						number: 12,
						airdate: '2005-11-16',
						airtime: '22:00',
						airstamp: '2005-11-17T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188617.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188617.jpg',
						},
						summary:
							'Religious leaders think Stan is the "Golden Child," prompting believers to camp in front of his house.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8055',
							},
						},
					},
					{
						id: 8056,
						url:
							'http://www.tvmaze.com/episodes/8056/south-park-9x13-free-willzyx',
						name: 'Free Willzyx',
						season: 9,
						number: 13,
						airdate: '2005-11-30',
						airtime: '22:00',
						airstamp: '2005-12-01T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188616.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188616.jpg',
						},
						summary:
							'Kyle bonds with a marine-park whale and gets the boys to help try to return the creature to its family.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8056',
							},
						},
					},
					{
						id: 8057,
						url:
							'http://www.tvmaze.com/episodes/8057/south-park-9x14-bloody-mary',
						name: 'Bloody Mary',
						season: 9,
						number: 14,
						airdate: '2005-12-07',
						airtime: '22:00',
						airstamp: '2005-12-08T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188615.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188615.jpg',
						},
						summary:
							"After his drunken-driving arrest, Stan's dad believes a visit to a bleeding statue of the Virgin Mary will cure his drinking problem.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8057',
							},
						},
					},
					{
						id: 8058,
						url:
							'http://www.tvmaze.com/episodes/8058/south-park-10x01-the-return-of-chef',
						name: 'The Return of Chef',
						season: 10,
						number: 1,
						airdate: '2006-03-22',
						airtime: '22:00',
						airstamp: '2006-03-23T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188614.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188614.jpg',
						},
						summary:
							"Chef Jerome McElroy returns, though the kids notice he's not quite the same.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8058',
							},
						},
					},
					{
						id: 8059,
						url:
							'http://www.tvmaze.com/episodes/8059/south-park-10x02-smug-alert',
						name: 'Smug Alert!',
						season: 10,
						number: 2,
						airdate: '2006-03-29',
						airtime: '22:00',
						airstamp: '2006-03-30T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188613.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188613.jpg',
						},
						summary:
							'Stan leads a campaign to purchase hybrid cars, but it stalls when an environmental disaster threatens the town.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8059',
							},
						},
					},
					{
						id: 8060,
						url:
							'http://www.tvmaze.com/episodes/8060/south-park-10x03-cartoon-wars-1',
						name: 'Cartoon Wars (1)',
						season: 10,
						number: 3,
						airdate: '2006-04-05',
						airtime: '22:00',
						airstamp: '2006-04-06T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188610.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188610.jpg',
						},
						summary:
							'Kyle and Cartman race to Hollywood, with the fate of Kyle\'s favorite cartoon, "Family Guy," at stake.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8060',
							},
						},
					},
					{
						id: 8061,
						url:
							'http://www.tvmaze.com/episodes/8061/south-park-10x04-cartoon-wars-2',
						name: 'Cartoon Wars (2)',
						season: 10,
						number: 4,
						airdate: '2006-04-12',
						airtime: '22:00',
						airstamp: '2006-04-13T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188611.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188611.jpg',
						},
						summary:
							'Kyle is injured and Cartman must forge on alone, determined to stop the makers of "Family Guy."',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8061',
							},
						},
					},
					{
						id: 8062,
						url:
							'http://www.tvmaze.com/episodes/8062/south-park-10x05-a-million-little-fibers',
						name: 'A Million Little Fibers',
						season: 10,
						number: 5,
						airdate: '2006-04-19',
						airtime: '22:00',
						airstamp: '2006-04-20T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188592.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188592.jpg',
						},
						summary:
							"Oprah picks Towelie's memoir for her book club, but his account is found to be less than truthful. Soon, the public derision lures Towelie off the wagon.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8062',
							},
						},
					},
					{
						id: 8063,
						url:
							'http://www.tvmaze.com/episodes/8063/south-park-10x06-manbearpig',
						name: 'ManBearPig',
						season: 10,
						number: 6,
						airdate: '2006-04-26',
						airtime: '22:00',
						airstamp: '2006-04-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188591.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188591.jpg',
						},
						summary:
							'Cartman finds treasure when the boys get stuck in a cave.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8063',
							},
						},
					},
					{
						id: 8064,
						url:
							'http://www.tvmaze.com/episodes/8064/south-park-10x07-tsst',
						name: 'Tsst',
						season: 10,
						number: 7,
						airdate: '2006-05-03',
						airtime: '22:00',
						airstamp: '2006-05-04T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188590.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188590.jpg',
						},
						summary:
							"Cartman's mom employs the Dog Whisperer to help curb her son's behavioral problems.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8064',
							},
						},
					},
					{
						id: 8065,
						url:
							'http://www.tvmaze.com/episodes/8065/south-park-10x08-make-love-not-warcraft',
						name: 'Make Love, Not Warcraft',
						season: 10,
						number: 8,
						airdate: '2006-10-04',
						airtime: '22:00',
						airstamp: '2006-10-05T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188589.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188589.jpg',
						},
						summary:
							'The gang attempts to save the online game World of Warcraft after it is taken over by a renegade gamer.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8065',
							},
						},
					},
					{
						id: 8066,
						url:
							'http://www.tvmaze.com/episodes/8066/south-park-10x09-mystery-of-the-urinal-deuce',
						name: 'Mystery of the Urinal Deuce',
						season: 10,
						number: 9,
						airdate: '2006-10-11',
						airtime: '22:00',
						airstamp: '2006-10-12T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188588.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188588.jpg',
						},
						summary:
							"The gang discovers who's responsible for the 9/11 attacks and realizes South Park may be in danger.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8066',
							},
						},
					},
					{
						id: 8067,
						url:
							'http://www.tvmaze.com/episodes/8067/south-park-10x10-miss-teacher-bangs-a-boy',
						name: 'Miss Teacher Bangs a Boy',
						season: 10,
						number: 10,
						airdate: '2006-10-18',
						airtime: '22:00',
						airstamp: '2006-10-19T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188587.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188587.jpg',
						},
						summary:
							'Cartman is tapped to be the new hallway monitor and takes offense when Kyle discovers a teacher is having an affair with a student in his jurisdiction.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8067',
							},
						},
					},
					{
						id: 8068,
						url:
							'http://www.tvmaze.com/episodes/8068/south-park-10x11-hell-on-earth-2006',
						name: 'Hell on Earth 2006',
						season: 10,
						number: 11,
						airdate: '2006-10-25',
						airtime: '22:00',
						airstamp: '2006-10-26T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188586.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188586.jpg',
						},
						summary:
							'Satan tries to plan a Halloween party while dealing with a religious group, an ex-lover and mischievous serial killers.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8068',
							},
						},
					},
					{
						id: 8069,
						url:
							'http://www.tvmaze.com/episodes/8069/south-park-10x12-go-god-go-1',
						name: 'Go God Go (1)',
						season: 10,
						number: 12,
						airdate: '2006-11-01',
						airtime: '22:00',
						airstamp: '2006-11-02T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188585.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188585.jpg',
						},
						summary:
							'South Park residents clash over the teaching of evolution. Meanwhile, Cartman attempts time travel so he can play a soon-to-be-released video-game system.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8069',
							},
						},
					},
					{
						id: 8070,
						url:
							'http://www.tvmaze.com/episodes/8070/south-park-10x13-go-god-go-xii-2',
						name: 'Go God Go XII (2)',
						season: 10,
						number: 13,
						airdate: '2006-11-08',
						airtime: '22:00',
						airstamp: '2006-11-09T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188584.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188584.jpg',
						},
						summary:
							'Cartman tries to escape a dystopian future plagued by militant otters and a lack of video games.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8070',
							},
						},
					},
					{
						id: 8071,
						url:
							'http://www.tvmaze.com/episodes/8071/south-park-10x14-stanleys-cup',
						name: "Stanley's Cup",
						season: 10,
						number: 14,
						airdate: '2006-11-15',
						airtime: '22:00',
						airstamp: '2006-11-16T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188583.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188583.jpg',
						},
						summary:
							"Stan Marsh has hit rock bottom. He's got no job, no bicycle and his only way out of a bad situation is to coach the local pee wee hockey team. Once a hotshot pee wee hockey player himself, Marsh has tried to put those days behind him. But he's still living with the memory of how he let his team down when he missed the winning shot in the big game. Now, he's about to find out that being a coach means facing your past. He's determined to show his kids what it's like to be winners!",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8071',
							},
						},
					},
					{
						id: 8072,
						url:
							'http://www.tvmaze.com/episodes/8072/south-park-11x01-with-apologies-to-jesse-jackson',
						name: 'With Apologies to Jesse Jackson',
						season: 11,
						number: 1,
						airdate: '2007-03-07',
						airtime: '22:00',
						airstamp: '2007-03-08T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/58/146775.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/58/146775.jpg',
						},
						summary:
							'Randy Marsh is publicly chastised for using the N-word on national television. Meanwhile, Cartman clashes with a little person.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8072',
							},
						},
					},
					{
						id: 8073,
						url:
							'http://www.tvmaze.com/episodes/8073/south-park-11x02-cartman-sucks',
						name: 'Cartman Sucks',
						season: 11,
						number: 2,
						airdate: '2007-03-14',
						airtime: '22:00',
						airstamp: '2007-03-15T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188580.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188580.jpg',
						},
						summary:
							'Butters is sent to a religious camp that promotes a heterosexual lifestyle.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8073',
							},
						},
					},
					{
						id: 8074,
						url:
							'http://www.tvmaze.com/episodes/8074/south-park-11x03-lice-capades',
						name: 'Lice Capades',
						season: 11,
						number: 3,
						airdate: '2007-03-21',
						airtime: '22:00',
						airstamp: '2007-03-22T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188579.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188579.jpg',
						},
						summary:
							'th Park Elementary deals with a head-lice scare, and Cartman looks to expose the kids with infected scalps.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8074',
							},
						},
					},
					{
						id: 8075,
						url:
							'http://www.tvmaze.com/episodes/8075/south-park-11x04-the-snuke',
						name: 'The Snuke',
						season: 11,
						number: 4,
						airdate: '2007-03-28',
						airtime: '22:00',
						airstamp: '2007-03-29T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188578.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188578.jpg',
						},
						summary:
							"lary Clinton makes a campaign stop in South Park. Meanwhile, Cartman believes he's uncovered a terrorist plot.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8075',
							},
						},
					},
					{
						id: 8076,
						url:
							'http://www.tvmaze.com/episodes/8076/south-park-11x05-fantastic-easter-special',
						name: 'Fantastic Easter Special',
						season: 11,
						number: 5,
						airdate: '2007-04-04',
						airtime: '22:00',
						airstamp: '2007-04-05T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188577.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188577.jpg',
						},
						summary:
							'Stan searches for the origins of egg decorating, and falls in with a strange society guarding an infamous secret.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8076',
							},
						},
					},
					{
						id: 8077,
						url:
							'http://www.tvmaze.com/episodes/8077/south-park-11x06-d-yikes',
						name: 'D-Yikes',
						season: 11,
						number: 6,
						airdate: '2007-04-11',
						airtime: '22:00',
						airstamp: '2007-04-12T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188576.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188576.jpg',
						},
						summary:
							'Ms. Garrison gets dumped again, so the boys decide to hire someone to remedy the situation.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8077',
							},
						},
					},
					{
						id: 8078,
						url:
							'http://www.tvmaze.com/episodes/8078/south-park-11x07-night-of-the-living-homeless',
						name: 'Night of the Living Homeless',
						season: 11,
						number: 7,
						airdate: '2007-04-18',
						airtime: '22:00',
						airstamp: '2007-04-19T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188573.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188573.jpg',
						},
						summary:
							'The homeless population is on the rise in South Park. Both the adults and children go to work looking for solutions to the problem.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8078',
							},
						},
					},
					{
						id: 8079,
						url:
							'http://www.tvmaze.com/episodes/8079/south-park-11x08-le-petit-tourette',
						name: 'Le Petit Tourette',
						season: 11,
						number: 8,
						airdate: '2007-10-03',
						airtime: '22:00',
						airstamp: '2007-10-04T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188572.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188572.jpg',
						},
						summary:
							"Cartman pretends to have Tourette's syndrome in order to say whatever he wants.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8079',
							},
						},
					},
					{
						id: 8080,
						url:
							'http://www.tvmaze.com/episodes/8080/south-park-11x09-more-crap',
						name: 'More Crap',
						season: 11,
						number: 9,
						airdate: '2007-10-10',
						airtime: '22:00',
						airstamp: '2007-10-11T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188570.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188570.jpg',
						},
						summary:
							'Randy Marsh becomes a local hero after passing a sizable bowel movement. Later, he contacts a record-keeping society to find out if he has surpassed the world record.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8080',
							},
						},
					},
					{
						id: 8081,
						url:
							'http://www.tvmaze.com/episodes/8081/south-park-11x10-imaginationland-1',
						name: 'Imaginationland (1)',
						season: 11,
						number: 10,
						airdate: '2007-10-17',
						airtime: '22:00',
						airstamp: '2007-10-18T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188569.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188569.jpg',
						},
						summary:
							"The boys enter a dimension containing the world's imagination. Before long, the government taps them for intelligence.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8081',
							},
						},
					},
					{
						id: 8082,
						url:
							'http://www.tvmaze.com/episodes/8082/south-park-11x11-imaginationland-2',
						name: 'Imaginationland (2)',
						season: 11,
						number: 11,
						airdate: '2007-10-24',
						airtime: '22:00',
						airstamp: '2007-10-25T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188568.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188568.jpg',
						},
						summary:
							'Pentagon officials pressure Kyle and Stan to reveal how they gained access to Imaginationland. Meanwhile, Cartman searches for Kyle in order to make him fulfill his side of the leprechaun bet.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8082',
							},
						},
					},
					{
						id: 8083,
						url:
							'http://www.tvmaze.com/episodes/8083/south-park-11x12-imaginationland-3',
						name: 'Imaginationland (3)',
						season: 11,
						number: 12,
						airdate: '2007-10-31',
						airtime: '22:00',
						airstamp: '2007-11-01T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188567.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188567.jpg',
						},
						summary:
							'Stan and Butters attempt to escape Imaginationland before the government detonates a nuclear device in the alternate dimension. Meanwhile, Cartman takes his bet with Kyle to the Supreme Court.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8083',
							},
						},
					},
					{
						id: 8084,
						url:
							'http://www.tvmaze.com/episodes/8084/south-park-11x13-guitar-queer-o',
						name: 'Guitar Queer-o',
						season: 11,
						number: 13,
						airdate: '2007-11-07',
						airtime: '22:00',
						airstamp: '2007-11-08T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188566.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188566.jpg',
						},
						summary:
							'Stan and Kyle become a successful Guitar Hero duo. After they part ways, Stan succumbs to the pitfalls of rock stardom.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8084',
							},
						},
					},
					{
						id: 8085,
						url:
							'http://www.tvmaze.com/episodes/8085/south-park-11x14-the-list',
						name: 'The List',
						season: 11,
						number: 14,
						airdate: '2007-11-14',
						airtime: '22:00',
						airstamp: '2007-11-15T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188564.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188564.jpg',
						},
						summary:
							'The boys discover a secret list compiled by their female classmates that rates them according to looks.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8085',
							},
						},
					},
					{
						id: 8086,
						url:
							'http://www.tvmaze.com/episodes/8086/south-park-12x01-tonsil-trouble',
						name: 'Tonsil Trouble',
						season: 12,
						number: 1,
						airdate: '2008-03-12',
						airtime: '22:00',
						airstamp: '2008-03-13T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/63/159250.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/63/159250.jpg',
						},
						summary:
							'In the 12th-season premiere, Cartman faces an uncertain future after a routine tonsillectomy reveals a more serious condition.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8086',
							},
						},
					},
					{
						id: 8087,
						url:
							'http://www.tvmaze.com/episodes/8087/south-park-12x02-britneys-new-look',
						name: "Britney's New Look",
						season: 12,
						number: 2,
						airdate: '2008-03-19',
						airtime: '22:00',
						airstamp: '2008-03-20T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/67/167887.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/67/167887.jpg',
						},
						summary:
							"The boys meet Britney Spears while she's on a search for seclusion in the Colorado mountains, and Stan and Kyle eventually take on the responsibility of getting her to the North Pole.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8087',
							},
						},
					},
					{
						id: 8088,
						url:
							'http://www.tvmaze.com/episodes/8088/south-park-12x03-major-boobage',
						name: 'Major Boobage',
						season: 12,
						number: 3,
						airdate: '2008-03-26',
						airtime: '22:00',
						airstamp: '2008-03-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188562.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188562.jpg',
						},
						summary:
							'Suspicions by friends and family of Kenny\'s drug use play out in an homage to the 1981 animated fantasy "Heavy Metal."',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8088',
							},
						},
					},
					{
						id: 8089,
						url:
							'http://www.tvmaze.com/episodes/8089/south-park-12x04-canada-on-strike',
						name: 'Canada on Strike',
						season: 12,
						number: 4,
						airdate: '2008-04-02',
						airtime: '22:00',
						airstamp: '2008-04-03T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188561.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188561.jpg',
						},
						summary:
							'When Canada goes on strike, the boys find themselves in the thick of negotiations for a settlement, and the void in U.S. jobs is filled by replacements from Denmark. Meanwhile, Terrance and Phillip are on the fence about joining the strike, but are shocked by its fiscal consequences.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8089',
							},
						},
					},
					{
						id: 8090,
						url:
							'http://www.tvmaze.com/episodes/8090/south-park-12x05-eek-a-penis',
						name: 'Eek, a Penis!',
						season: 12,
						number: 5,
						airdate: '2008-04-09',
						airtime: '22:00',
						airstamp: '2008-04-10T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188559.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188559.jpg',
						},
						summary:
							"Cartman takes over Ms. Garrison's class when the teacher's personal crisis causes her to be removed from the classroom.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8090',
							},
						},
					},
					{
						id: 8091,
						url:
							'http://www.tvmaze.com/episodes/8091/south-park-12x06-over-logging',
						name: 'Over Logging',
						season: 12,
						number: 6,
						airdate: '2008-04-16',
						airtime: '22:00',
						airstamp: '2008-04-17T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188557.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188557.jpg',
						},
						summary:
							'When a lack of Internet access in South Park sparks panic in the community, Randy takes his family to California in search of a signal.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8091',
							},
						},
					},
					{
						id: 8092,
						url:
							'http://www.tvmaze.com/episodes/8092/south-park-12x07-super-fun-time',
						name: 'Super Fun Time',
						season: 12,
						number: 7,
						airdate: '2008-04-23',
						airtime: '22:00',
						airstamp: '2008-04-24T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188556.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188556.jpg',
						},
						summary:
							'A class trip to a living museum that recreates 1800s Colorado leads to a hostage situation for some of the boys.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8092',
							},
						},
					},
					{
						id: 8093,
						url:
							'http://www.tvmaze.com/episodes/8093/south-park-12x08-the-china-probrem',
						name: 'The China Probrem',
						season: 12,
						number: 8,
						airdate: '2008-10-08',
						airtime: '22:00',
						airstamp: '2008-10-09T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/155344.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/155344.jpg',
						},
						summary:
							'Butters stands with Cartman as he confronts the Chinese after a tragic event.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8093',
							},
						},
					},
					{
						id: 8094,
						url:
							'http://www.tvmaze.com/episodes/8094/south-park-12x09-breast-cancer-show-ever',
						name: 'Breast Cancer Show Ever',
						season: 12,
						number: 9,
						airdate: '2008-10-15',
						airtime: '22:00',
						airstamp: '2008-10-16T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188555.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188555.jpg',
						},
						summary:
							'Wendy courts trouble when she vows to beat up Cartman after school.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8094',
							},
						},
					},
					{
						id: 8095,
						url:
							'http://www.tvmaze.com/episodes/8095/south-park-12x10-pandemic-1',
						name: 'Pandemic (1)',
						season: 12,
						number: 10,
						airdate: '2008-10-22',
						airtime: '22:00',
						airstamp: '2008-10-23T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188554.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188554.jpg',
						},
						summary:
							'Cartman enlists the help of rival Craig when the boys spot an easy opportunity for financial gain from a global crisis.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8095',
							},
						},
					},
					{
						id: 8096,
						url:
							'http://www.tvmaze.com/episodes/8096/south-park-12x11-pandemic-2-the-startling',
						name: 'Pandemic (2): The Startling',
						season: 12,
						number: 11,
						airdate: '2008-10-29',
						airtime: '22:00',
						airstamp: '2008-10-30T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188553.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188553.jpg',
						},
						summary:
							'The boys discover the reason for the global attacks by oversize guinea pigs, but first they have to find their way out of the Andes.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8096',
							},
						},
					},
					{
						id: 8097,
						url:
							'http://www.tvmaze.com/episodes/8097/south-park-12x12-about-last-night',
						name: 'About Last Night...',
						season: 12,
						number: 12,
						airdate: '2008-11-05',
						airtime: '22:00',
						airstamp: '2008-11-06T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188552.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188552.jpg',
						},
						summary:
							'South Park residents join the rest of the country in celebrating the election of a U.S. president, who moves a new administration into the White House ahead of schedule.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8097',
							},
						},
					},
					{
						id: 8098,
						url:
							'http://www.tvmaze.com/episodes/8098/south-park-12x13-elementary-school-musical',
						name: 'Elementary School Musical',
						season: 12,
						number: 13,
						airdate: '2008-11-12',
						airtime: '22:00',
						airstamp: '2008-11-13T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188551.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188551.jpg',
						},
						summary:
							'The boys are startled to learn that their popularity at school is waning when they fail to submit to the latest fad, which actually makes Butters cooler than they are.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8098',
							},
						},
					},
					{
						id: 8099,
						url:
							'http://www.tvmaze.com/episodes/8099/south-park-12x14-the-ungroundable',
						name: 'The Ungroundable',
						season: 12,
						number: 14,
						airdate: '2008-11-19',
						airtime: '22:00',
						airstamp: '2008-11-20T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188550.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188550.jpg',
						},
						summary:
							'In the 12th-season finale, vampire sightings at school anger the Goth kids, who are upset when they become indistinguishable from the bloodsucking interlopers in the eyes of their peers.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8099',
							},
						},
					},
					{
						id: 8100,
						url:
							'http://www.tvmaze.com/episodes/8100/south-park-13x01-the-ring',
						name: 'The Ring',
						season: 13,
						number: 1,
						airdate: '2009-03-11',
						airtime: '22:00',
						airstamp: '2009-03-12T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188549.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188549.jpg',
						},
						summary:
							'In the 13th-season premiere, Kenny gets less than he bargained for when he takes his new girlfriend to a Jonas Brothers concert.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8100',
							},
						},
					},
					{
						id: 8101,
						url:
							'http://www.tvmaze.com/episodes/8101/south-park-13x02-the-coon',
						name: 'The Coon',
						season: 13,
						number: 2,
						airdate: '2009-03-18',
						airtime: '22:00',
						airstamp: '2009-03-19T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188548.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188548.jpg',
						},
						summary:
							'Rival vigilantes battle for supremacy as crime-fighting icons of the town.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8101',
							},
						},
					},
					{
						id: 8102,
						url:
							'http://www.tvmaze.com/episodes/8102/south-park-13x03-margaritaville',
						name: 'Margaritaville',
						season: 13,
						number: 3,
						airdate: '2009-03-25',
						airtime: '22:00',
						airstamp: '2009-03-26T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188546.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188546.jpg',
						},
						summary:
							"Randy's solution to fix the economy finds enthusiastic support in the community and revolutionizes the way people live their lives.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8102',
							},
						},
					},
					{
						id: 8103,
						url:
							'http://www.tvmaze.com/episodes/8103/south-park-13x04-eat-pray-queef',
						name: 'Eat, Pray, Queef',
						season: 13,
						number: 4,
						airdate: '2009-04-01',
						airtime: '22:00',
						airstamp: '2009-04-02T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188545.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188545.jpg',
						},
						summary:
							"An April Fools' joke goes bad, inspiring fear and fury among the boys.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8103',
							},
						},
					},
					{
						id: 8104,
						url:
							'http://www.tvmaze.com/episodes/8104/south-park-13x05-fishsticks',
						name: 'Fishsticks',
						season: 13,
						number: 5,
						airdate: '2009-04-08',
						airtime: '22:00',
						airstamp: '2009-04-09T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/156258.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/156258.jpg',
						},
						summary:
							"Cartman helps Jimmy with a comedy routine that becomes the sensation of the year until it's time to take credit for the joke.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8104',
							},
						},
					},
					{
						id: 8105,
						url:
							'http://www.tvmaze.com/episodes/8105/south-park-13x06-pinewood-derby',
						name: 'Pinewood Derby',
						season: 13,
						number: 6,
						airdate: '2009-04-15',
						airtime: '22:00',
						airstamp: '2009-04-16T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188544.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188544.jpg',
						},
						summary:
							'Randy pulls out all the stops to make sure that Stan wins first place in the annual Pinewood Derby',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8105',
							},
						},
					},
					{
						id: 8106,
						url:
							'http://www.tvmaze.com/episodes/8106/south-park-13x07-fatbeard',
						name: 'Fatbeard',
						season: 13,
						number: 7,
						airdate: '2009-04-22',
						airtime: '22:00',
						airstamp: '2009-04-23T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188543.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188543.jpg',
						},
						summary:
							'Buoyed by news of pirates in Somalia, Cartman hatches a plan to run away to live the life of a buccaneer.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8106',
							},
						},
					},
					{
						id: 8107,
						url:
							'http://www.tvmaze.com/episodes/8107/south-park-13x08-dead-celebrities',
						name: 'Dead Celebrities',
						season: 13,
						number: 8,
						airdate: '2009-10-07',
						airtime: '22:00',
						airstamp: '2009-10-08T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188542.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188542.jpg',
						},
						summary:
							'Kyle seeks help from paranormal experts when his little brother is haunted by ghosts.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8107',
							},
						},
					},
					{
						id: 8108,
						url:
							'http://www.tvmaze.com/episodes/8108/south-park-13x09-butters-bottom-bitch',
						name: "Butters' Bottom Bitch",
						season: 13,
						number: 9,
						airdate: '2009-10-14',
						airtime: '22:00',
						airstamp: '2009-10-15T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/61/154096.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/61/154096.jpg',
						},
						summary:
							"Butters hopes his first kiss will put an end to his friends' ridicule.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8108',
							},
						},
					},
					{
						id: 8109,
						url:
							'http://www.tvmaze.com/episodes/8109/south-park-13x10-wtf',
						name: 'W.T.F.',
						season: 13,
						number: 10,
						airdate: '2009-10-21',
						airtime: '22:00',
						airstamp: '2009-10-22T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/41/103183.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/41/103183.jpg',
						},
						summary:
							'The boys aspire to be professional wrestlers after seeing their first match live.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8109',
							},
						},
					},
					{
						id: 8110,
						url:
							'http://www.tvmaze.com/episodes/8110/south-park-13x11-whale-whores',
						name: 'Whale Whores',
						season: 13,
						number: 11,
						airdate: '2009-10-28',
						airtime: '22:00',
						airstamp: '2009-10-29T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188541.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188541.jpg',
						},
						summary:
							'Stan vows to save the dolphins after a family visit to an aquarium in Denver on his birthday is marred by a mass slaughter of aquatic mammals.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8110',
							},
						},
					},
					{
						id: 8111,
						url:
							'http://www.tvmaze.com/episodes/8111/south-park-13x12-the-f-word',
						name: 'The F Word',
						season: 13,
						number: 12,
						airdate: '2009-11-04',
						airtime: '22:00',
						airstamp: '2009-11-05T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188540.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188540.jpg',
						},
						summary:
							'The boys take action when a motorcycle festival takes over the town.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8111',
							},
						},
					},
					{
						id: 8112,
						url:
							'http://www.tvmaze.com/episodes/8112/south-park-13x13-dances-with-smurfs',
						name: 'Dances with Smurfs',
						season: 13,
						number: 13,
						airdate: '2009-11-11',
						airtime: '22:00',
						airstamp: '2009-11-12T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188539.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188539.jpg',
						},
						summary:
							'Cartman is selected to read the morning announcements at school, but he turns the forum into a bully pulpit to unleash criticism of the student-body president.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8112',
							},
						},
					},
					{
						id: 8113,
						url:
							'http://www.tvmaze.com/episodes/8113/south-park-13x14-pee',
						name: 'Pee',
						season: 13,
						number: 14,
						airdate: '2009-11-18',
						airtime: '22:00',
						airstamp: '2009-11-19T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188538.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188538.jpg',
						},
						summary:
							"In the 13th-season finale, the boys' trip to a local water park comes with apocalyptic overtones.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8113',
							},
						},
					},
					{
						id: 8114,
						url:
							'http://www.tvmaze.com/episodes/8114/south-park-14x01-sexual-healing',
						name: 'Sexual Healing',
						season: 14,
						number: 1,
						airdate: '2010-03-17',
						airtime: '22:00',
						airstamp: '2010-03-18T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188537.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188537.jpg',
						},
						summary:
							'In the 14th-season premiere, scientific testing reveals that some of the fourth-grade boys are sex addicts.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8114',
							},
						},
					},
					{
						id: 8115,
						url:
							'http://www.tvmaze.com/episodes/8115/south-park-14x02-the-tale-of-scrotie-mcboogerballs',
						name: 'The Tale of Scrotie McBoogerballs',
						season: 14,
						number: 2,
						airdate: '2010-03-24',
						airtime: '22:00',
						airstamp: '2010-03-25T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188536.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188536.jpg',
						},
						summary:
							'After being assigned to read a book that was once banned, the boys are inspired to collaborate on one of their own.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8115',
							},
						},
					},
					{
						id: 8116,
						url:
							'http://www.tvmaze.com/episodes/8116/south-park-14x03-medicinal-fried-chicken',
						name: 'Medicinal Fried Chicken',
						season: 14,
						number: 3,
						airdate: '2010-03-31',
						airtime: '22:00',
						airstamp: '2010-04-01T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/61/153066.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/61/153066.jpg',
						},
						summary:
							"When a store selling medical marijuana opens on the site of Cartman's favorite fried-chicken joint, Randy is first in line to buy some weed. But he can't because he's completely healthy. Meanwhile, Cartman will stop at nothing to get the restaurant back.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8116',
							},
						},
					},
					{
						id: 8117,
						url:
							'http://www.tvmaze.com/episodes/8117/south-park-14x04-you-have-0-friends',
						name: 'You Have 0 Friends',
						season: 14,
						number: 4,
						airdate: '2010-04-07',
						airtime: '22:00',
						airstamp: '2010-04-08T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188535.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188535.jpg',
						},
						summary:
							'Kyle turns to Stan for help with a Facebook crisis.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8117',
							},
						},
					},
					{
						id: 8118,
						url:
							'http://www.tvmaze.com/episodes/8118/south-park-14x05-200',
						name: '200',
						season: 14,
						number: 5,
						airdate: '2010-04-14',
						airtime: '22:00',
						airstamp: '2010-04-15T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188534.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188534.jpg',
						},
						summary:
							'South Park is the target of a class-action lawsuit on behalf of all the vengeful celebrities who have been mocked by the town.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8118',
							},
						},
					},
					{
						id: 8119,
						url:
							'http://www.tvmaze.com/episodes/8119/south-park-14x06-201',
						name: '201',
						season: 14,
						number: 6,
						airdate: '2010-04-21',
						airtime: '22:00',
						airstamp: '2010-04-22T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188533.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188533.jpg',
						},
						summary:
							"The identity of Cartman's dad is on everyone's mind despite threats from the ginger kids about Muhammad and enraged celebrities who have harnessed the power of Mecha Streisand.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8119',
							},
						},
					},
					{
						id: 8120,
						url:
							'http://www.tvmaze.com/episodes/8120/south-park-14x07-crippled-summer',
						name: 'Crippled Summer',
						season: 14,
						number: 7,
						airdate: '2010-04-28',
						airtime: '22:00',
						airstamp: '2010-04-29T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/61/154069.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/61/154069.jpg',
						},
						summary:
							"Jimmy and Timmy go to summer camp with a winner-take-all attitude in a variety of contests, including Jimmy's participation in a surfing competition. Towelie faces an intervention for his addictions.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8120',
							},
						},
					},
					{
						id: 8121,
						url:
							'http://www.tvmaze.com/episodes/8121/south-park-14x08-poor-and-stupid',
						name: 'Poor and Stupid',
						season: 14,
						number: 8,
						airdate: '2010-10-06',
						airtime: '22:00',
						airstamp: '2010-10-07T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188532.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188532.jpg',
						},
						summary:
							"Cartman's dream to become a NASCAR driver comes true, with Butters as his pit boss.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8121',
							},
						},
					},
					{
						id: 8122,
						url:
							'http://www.tvmaze.com/episodes/8122/south-park-14x09-its-a-jersey-thing',
						name: "It's a Jersey Thing",
						season: 14,
						number: 9,
						airdate: '2010-10-13',
						airtime: '22:00',
						airstamp: '2010-10-14T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188531.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188531.jpg',
						},
						summary:
							'Randy spearheads the town\'s defense when "Jersey Shore"-inspired Garden State residents are threatening to take over the entire country.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8122',
							},
						},
					},
					{
						id: 8123,
						url:
							'http://www.tvmaze.com/episodes/8123/south-park-14x10-insheeption',
						name: 'Insheeption',
						season: 14,
						number: 10,
						airdate: '2010-10-20',
						airtime: '22:00',
						airstamp: '2010-10-21T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188530.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188530.jpg',
						},
						summary:
							'Stan talks to Mr. Mackey about his hoarding disorder, but learns the guidance counselor has problems with the same compulsion.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8123',
							},
						},
					},
					{
						id: 8124,
						url:
							'http://www.tvmaze.com/episodes/8124/south-park-14x11-coon-2-hindsight',
						name: 'Coon 2: Hindsight',
						season: 14,
						number: 11,
						airdate: '2010-10-27',
						airtime: '22:00',
						airstamp: '2010-10-28T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188529.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188529.jpg',
						},
						summary:
							'The Coon leads a group of crimefighters who spring into action to help victims of another drilling catastrophe in the Gulf.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8124',
							},
						},
					},
					{
						id: 8125,
						url:
							'http://www.tvmaze.com/episodes/8125/south-park-14x12-mysterion-rises',
						name: 'Mysterion Rises',
						season: 14,
						number: 12,
						airdate: '2010-11-03',
						airtime: '22:00',
						airstamp: '2010-11-04T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188528.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188528.jpg',
						},
						summary:
							'The identity of Mysterion is revealed when the Coon, abandoned by his crime-fighting cohorts, seeks revenge in the Gulf.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8125',
							},
						},
					},
					{
						id: 8126,
						url:
							'http://www.tvmaze.com/episodes/8126/south-park-14x13-coon-vs-coon-friends',
						name: 'Coon vs. Coon & Friends',
						season: 14,
						number: 13,
						airdate: '2010-11-10',
						airtime: '22:00',
						airstamp: '2010-11-11T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188527.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188527.jpg',
						},
						summary:
							"Cthulhu does Cartman's bidding, leaving Coon &amp; Friends at his mercy; Kenny's curse presents a dilemma.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8126',
							},
						},
					},
					{
						id: 8127,
						url:
							'http://www.tvmaze.com/episodes/8127/south-park-14x14-creme-fraiche',
						name: 'Crème Fraiche',
						season: 14,
						number: 14,
						airdate: '2010-11-17',
						airtime: '22:00',
						airstamp: '2010-11-18T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188526.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188526.jpg',
						},
						summary:
							"In the 14th-season finale, Randy's addiction to the Food Network has a detrimental effect on his family.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8127',
							},
						},
					},
					{
						id: 8128,
						url:
							'http://www.tvmaze.com/episodes/8128/south-park-15x01-humancentipad',
						name: 'HUMANCENTiPAD',
						season: 15,
						number: 1,
						airdate: '2011-04-27',
						airtime: '22:00',
						airstamp: '2011-04-28T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188524.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188524.jpg',
						},
						summary:
							'The 15th season begins with the launch of a revolutionary tablet computer, though Cartman is feeling left out of the technology craze.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8128',
							},
						},
					},
					{
						id: 8129,
						url:
							'http://www.tvmaze.com/episodes/8129/south-park-15x02-funnybot',
						name: 'Funnybot',
						season: 15,
						number: 2,
						airdate: '2011-05-04',
						airtime: '22:00',
						airstamp: '2011-05-05T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188523.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188523.jpg',
						},
						summary:
							"Jimmy hosts the Special Ed department's inaugural Comedy Awards, but a comment about the Germans' sense of humor gets the school in hot water.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8129',
							},
						},
					},
					{
						id: 8130,
						url:
							'http://www.tvmaze.com/episodes/8130/south-park-15x03-royal-pudding',
						name: 'Royal Pudding',
						season: 15,
						number: 3,
						airdate: '2011-05-11',
						airtime: '22:00',
						airstamp: '2011-05-12T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188522.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188522.jpg',
						},
						summary:
							"Canadian-born Ike shares his country's obsession with a royal wedding and offers his services when the princess-to-be is abducted.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8130',
							},
						},
					},
					{
						id: 8131,
						url:
							'http://www.tvmaze.com/episodes/8131/south-park-15x04-tmi',
						name: 'T.M.I.',
						season: 15,
						number: 4,
						airdate: '2011-05-18',
						airtime: '22:00',
						airstamp: '2011-05-19T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/41/103201.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/41/103201.jpg',
						},
						summary:
							"Cartman is sent to anger-management therapy when he's upset after personal information about the boys is posted on the school bulletin board.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8131',
							},
						},
					},
					{
						id: 8132,
						url:
							'http://www.tvmaze.com/episodes/8132/south-park-15x05-crack-baby-athletic-association',
						name: 'Crack Baby Athletic Association',
						season: 15,
						number: 5,
						airdate: '2011-05-25',
						airtime: '22:00',
						airstamp: '2011-05-26T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188519.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188519.jpg',
						},
						summary:
							'Cartman hatches a plan to help babies who are born addicted to drugs',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8132',
							},
						},
					},
					{
						id: 8133,
						url:
							'http://www.tvmaze.com/episodes/8133/south-park-15x06-city-sushi',
						name: 'City Sushi',
						season: 15,
						number: 6,
						airdate: '2011-06-01',
						airtime: '22:00',
						airstamp: '2011-06-02T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188518.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188518.jpg',
						},
						summary:
							"Butters gets diagnosed with multiple personality disorder, and he's prescribed medication.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8133',
							},
						},
					},
					{
						id: 8134,
						url:
							'http://www.tvmaze.com/episodes/8134/south-park-15x07-youre-getting-old',
						name: "You're Getting Old",
						season: 15,
						number: 7,
						airdate: '2011-06-08',
						airtime: '22:00',
						airstamp: '2011-06-09T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188516.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188516.jpg',
						},
						summary:
							"Stan's outlook on life begins to change after his 10th birthday, but it also affects his friendships with the other kids, who find they have little in common with him anymore.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8134',
							},
						},
					},
					{
						id: 8135,
						url:
							'http://www.tvmaze.com/episodes/8135/south-park-15x08-ass-burgers',
						name: 'Ass Burgers',
						season: 15,
						number: 8,
						airdate: '2011-10-05',
						airtime: '22:00',
						airstamp: '2011-10-06T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188512.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188512.jpg',
						},
						summary:
							"Stan's stuck in an abnormal rut; Cartman suspects he has Asperger's syndrome.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8135',
							},
						},
					},
					{
						id: 8136,
						url:
							'http://www.tvmaze.com/episodes/8136/south-park-15x09-the-last-of-the-meheecans',
						name: 'The Last of the Meheecans',
						season: 15,
						number: 9,
						airdate: '2011-10-12',
						airtime: '22:00',
						airstamp: '2011-10-13T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/58/146893.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/58/146893.jpg',
						},
						summary:
							'Cartman fancies himself an agent of the U.S. Border Patrol when the boys play Texans vs. Mexicans.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8136',
							},
						},
					},
					{
						id: 8137,
						url:
							'http://www.tvmaze.com/episodes/8137/south-park-15x10-bass-to-mouth',
						name: 'Bass to Mouth',
						season: 15,
						number: 10,
						airdate: '2011-10-19',
						airtime: '22:00',
						airstamp: '2011-10-20T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/61/154073.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/61/154073.jpg',
						},
						summary:
							'A hacker wreaks havoc with gossipy Web posts on a site called "The South Park Elementary Eavesdropper."',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8137',
							},
						},
					},
					{
						id: 8138,
						url:
							'http://www.tvmaze.com/episodes/8138/south-park-15x11-broadway-bro-down',
						name: 'Broadway Bro Down',
						season: 15,
						number: 11,
						airdate: '2011-10-26',
						airtime: '22:00',
						airstamp: '2011-10-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188511.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188511.jpg',
						},
						summary:
							'Randy turns into a huge fan of Broadway shows after he takes Sharon to see a hit musical in Denver.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8138',
							},
						},
					},
					{
						id: 8139,
						url:
							'http://www.tvmaze.com/episodes/8139/south-park-15x12-1',
						name: '1%',
						season: 15,
						number: 12,
						airdate: '2011-11-02',
						airtime: '22:00',
						airstamp: '2011-11-03T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/155270.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/155270.jpg',
						},
						summary:
							"Cartman's lack of physical fitness makes him a target for the other kids' scorn.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8139',
							},
						},
					},
					{
						id: 8140,
						url:
							'http://www.tvmaze.com/episodes/8140/south-park-15x13-a-history-channel-thanksgiving',
						name: 'A History Channel Thanksgiving',
						season: 15,
						number: 13,
						airdate: '2011-11-09',
						airtime: '22:00',
						airstamp: '2011-11-10T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188509.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188509.jpg',
						},
						summary:
							'The boys learn what really happened at the first Thanksgiving—including an extraterrestrial presence—from a TV documentary.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8140',
							},
						},
					},
					{
						id: 8141,
						url:
							'http://www.tvmaze.com/episodes/8141/south-park-15x14-the-poor-kid',
						name: 'The Poor Kid',
						season: 15,
						number: 14,
						airdate: '2011-11-16',
						airtime: '22:00',
						airstamp: '2011-11-17T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188508.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188508.jpg',
						},
						summary:
							"In the 15th-season finale, the arrest of Kenny's parents sends him and his two siblings into the foster-care system, but the situation creates a dilemma for Cartman, who is left without a target to mock for being the poorest kid in school.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8141',
							},
						},
					},
					{
						id: 8142,
						url:
							'http://www.tvmaze.com/episodes/8142/south-park-16x01-reverse-cowgirl',
						name: 'Reverse Cowgirl',
						season: 16,
						number: 1,
						airdate: '2012-03-14',
						airtime: '22:00',
						airstamp: '2012-03-15T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188483.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188483.jpg',
						},
						summary:
							'Tragedy strikes when one of the boys repeatedly ignores reminders about leaving the toilet seat up in the Season 16 premiere.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8142',
							},
						},
					},
					{
						id: 8143,
						url:
							'http://www.tvmaze.com/episodes/8143/south-park-16x02-cash-for-gold',
						name: 'Cash for Gold',
						season: 16,
						number: 2,
						airdate: '2012-03-21',
						airtime: '22:00',
						airstamp: '2012-03-22T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188482.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188482.jpg',
						},
						summary:
							'Cartman targets a specific—and vulnerable—clientele when he starts his own shopping channel for gems, while Stan researches the value of a piece of jewelry that was a gift from his grandfather.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8143',
							},
						},
					},
					{
						id: 8144,
						url:
							'http://www.tvmaze.com/episodes/8144/south-park-16x03-faith-hilling',
						name: 'Faith Hilling',
						season: 16,
						number: 3,
						airdate: '2012-03-28',
						airtime: '22:00',
						airstamp: '2012-03-29T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188481.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188481.jpg',
						},
						summary:
							'An evolutionary development poses a grave threat to humanity.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8144',
							},
						},
					},
					{
						id: 8145,
						url:
							'http://www.tvmaze.com/episodes/8145/south-park-16x04-jewpacabra',
						name: 'Jewpacabra',
						season: 16,
						number: 4,
						airdate: '2012-04-04',
						airtime: '22:00',
						airstamp: '2012-04-05T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188480.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188480.jpg',
						},
						summary:
							"The town's Easter-egg hunt may be canceled due to rumors of a vicious beast that Cartman claims to have caught on film.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8145',
							},
						},
					},
					{
						id: 8146,
						url:
							'http://www.tvmaze.com/episodes/8146/south-park-16x05-butterballs',
						name: 'Butterballs',
						season: 16,
						number: 5,
						airdate: '2012-04-11',
						airtime: '22:00',
						airstamp: '2012-04-12T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/61/154086.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/61/154086.jpg',
						},
						summary:
							'Stan organizes an antibullying video when Butters is tormented by an unlikely predator.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8146',
							},
						},
					},
					{
						id: 8147,
						url:
							'http://www.tvmaze.com/episodes/8147/south-park-16x06-i-should-have-never-gone-ziplining',
						name: 'I Should Have Never Gone Ziplining',
						season: 16,
						number: 6,
						airdate: '2012-04-18',
						airtime: '22:00',
						airstamp: '2012-04-19T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188479.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188479.jpg',
						},
						summary:
							'The boys try zip-lining in the Colorado mountains on the last day of spring break, but their adventure takes a dangerous, life-threatening turn.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8147',
							},
						},
					},
					{
						id: 8148,
						url:
							'http://www.tvmaze.com/episodes/8148/south-park-16x07-cartman-finds-love',
						name: 'Cartman Finds Love',
						season: 16,
						number: 7,
						airdate: '2012-04-25',
						airtime: '22:00',
						airstamp: '2012-04-26T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188478.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188478.jpg',
						},
						summary:
							"A romance for Cartman may finally become a reality when there's a new girl at school.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8148',
							},
						},
					},
					{
						id: 8149,
						url:
							'http://www.tvmaze.com/episodes/8149/south-park-16x08-sarcastaball',
						name: 'Sarcastaball',
						season: 16,
						number: 8,
						airdate: '2012-09-26',
						airtime: '22:00',
						airstamp: '2012-09-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188477.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188477.jpg',
						},
						summary:
							"Randy's campaign to prevent head injuries in football radically changes the way the game is played, but the new rules become a national sensation and even make a South Park student a star athlete.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8149',
							},
						},
					},
					{
						id: 8150,
						url:
							'http://www.tvmaze.com/episodes/8150/south-park-16x09-raising-the-bar',
						name: 'Raising the Bar',
						season: 16,
						number: 9,
						airdate: '2012-10-03',
						airtime: '22:00',
						airstamp: '2012-10-04T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/45/112942.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/45/112942.jpg',
						},
						summary:
							"Cartman finally comes to the realization that he's overweight, but declares that the solution is to ride around on a mobility scooter. Also: Cartman learns he has a rival in a young reality-TV star.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8150',
							},
						},
					},
					{
						id: 8151,
						url:
							'http://www.tvmaze.com/episodes/8151/south-park-16x10-insecurity',
						name: 'Insecurity',
						season: 16,
						number: 10,
						airdate: '2012-10-10',
						airtime: '22:00',
						airstamp: '2012-10-11T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/155765.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/155765.jpg',
						},
						summary:
							'Kyle suspects that his mother is having an affair with a deliveryman; Cartman installs a home-security system.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8151',
							},
						},
					},
					{
						id: 8152,
						url:
							'http://www.tvmaze.com/episodes/8152/south-park-16x11-going-native',
						name: 'Going Native',
						season: 16,
						number: 11,
						airdate: '2012-10-17',
						airtime: '22:00',
						airstamp: '2012-10-18T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188475.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188475.jpg',
						},
						summary:
							"When Butters starts acting out at school, his parents realize it's time to tell him why he's not like all of the other kids. He must travel to a foreign place to learn the ways of his people. It will be a difficult trip for a young boy to make alone, so Butters chooses Kenny to travel with him to the distant and secluded island of Hawaii.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8152',
							},
						},
					},
					{
						id: 8153,
						url:
							'http://www.tvmaze.com/episodes/8153/south-park-16x12-a-nightmare-on-face-time',
						name: 'A Nightmare on Face Time',
						season: 16,
						number: 12,
						airdate: '2012-10-24',
						airtime: '22:00',
						airstamp: '2012-10-25T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188474.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188474.jpg',
						},
						summary:
							"The boys' plans to go trick-or-treating as their comic-book heroes, the Avengers, hit a snag when Stan's dad needs his son's help with a new business venture.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8153',
							},
						},
					},
					{
						id: 8154,
						url:
							'http://www.tvmaze.com/episodes/8154/south-park-16x13-a-scause-for-applause',
						name: 'A Scause for Applause',
						season: 16,
						number: 13,
						airdate: '2012-10-31',
						airtime: '22:00',
						airstamp: '2012-11-01T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188473.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188473.jpg',
						},
						summary:
							'An icon is implicated in a doping scandal, so supporters start cutting off their symbolic wristbands.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8154',
							},
						},
					},
					{
						id: 8155,
						url:
							'http://www.tvmaze.com/episodes/8155/south-park-16x14-obama-wins',
						name: 'Obama Wins!',
						season: 16,
						number: 14,
						airdate: '2012-11-07',
						airtime: '22:00',
						airstamp: '2012-11-08T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/41/103185.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/41/103185.jpg',
						},
						summary:
							'In the series 16 finale, Cartman believes he can affect the outcome of the 2012 presidential election.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8155',
							},
						},
					},
					{
						id: 8156,
						url:
							'http://www.tvmaze.com/episodes/8156/south-park-17x01-let-go-let-gov',
						name: 'Let Go, Let Gov',
						season: 17,
						number: 1,
						airdate: '2013-09-25',
						airtime: '22:00',
						airstamp: '2013-09-26T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188149.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188149.jpg',
						},
						summary:
							'In the Season 17 premiere, Cartman infiltrates the National Security Agency and is upset by what he finds in his personal file. Meanwhile, Butters finds a new audience for his prayers.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8156',
							},
						},
					},
					{
						id: 8157,
						url:
							'http://www.tvmaze.com/episodes/8157/south-park-17x02-informative-murder-porn',
						name: 'Informative Murder Porn',
						season: 17,
						number: 2,
						airdate: '2013-10-02',
						airtime: '22:00',
						airstamp: '2013-10-03T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/155364.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/155364.jpg',
						},
						summary:
							'The boys try to keep their parents from hurting one another by using a distraction in the form of the game "Minecraft."',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8157',
							},
						},
					},
					{
						id: 8158,
						url:
							'http://www.tvmaze.com/episodes/8158/south-park-17x03-world-war-zimmerman',
						name: 'World War Zimmerman',
						season: 17,
						number: 3,
						airdate: '2013-10-09',
						airtime: '22:00',
						airstamp: '2013-10-10T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188148.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188148.jpg',
						},
						summary:
							'Token is deemed a threat to all humanity by Cartman.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8158',
							},
						},
					},
					{
						id: 8159,
						url:
							'http://www.tvmaze.com/episodes/8159/south-park-17x04-goth-kids-3-dawn-of-the-posers',
						name: 'Goth Kids 3: Dawn of the Posers',
						season: 17,
						number: 4,
						airdate: '2013-10-23',
						airtime: '21:00',
						airstamp: '2013-10-24T01:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188147.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188147.jpg',
						},
						summary:
							'A goth kid is sent to a camp for troubled youth, but upon her return her friends find her changed in disturbing ways, so they turn to an unlikely group for help.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8159',
							},
						},
					},
					{
						id: 8160,
						url:
							'http://www.tvmaze.com/episodes/8160/south-park-17x05-taming-strange',
						name: 'Taming Strange',
						season: 17,
						number: 5,
						airdate: '2013-10-30',
						airtime: '22:00',
						airstamp: '2013-10-31T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188146.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188146.jpg',
						},
						summary:
							"Ike just isn't himself lately and he and Kyle are growing apart. Kyle goes to the guidance counselor for advice, but Mr. Mackey is too busy dealing with the bugs in the school's new integrated technology system to help. Kyle decides to take Ike to a live performance of his favorite show, \"Yo Gabba Gabba!\" He hopes it'll make his little brother like him again.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8160',
							},
						},
					},
					{
						id: 8161,
						url:
							'http://www.tvmaze.com/episodes/8161/south-park-17x06-ginger-cow',
						name: 'Ginger Cow',
						season: 17,
						number: 6,
						airdate: '2013-11-06',
						airtime: '22:00',
						airstamp: '2013-11-07T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/61/153057.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/61/153057.jpg',
						},
						summary:
							'Cartman facilitates world peace with his latest prank, which brings religious leaders to South Park to witness the fulfillment of a Biblical prophecy.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8161',
							},
						},
					},
					{
						id: 8162,
						url:
							'http://www.tvmaze.com/episodes/8162/south-park-17x07-the-black-friday-trilogy',
						name: 'The Black Friday Trilogy',
						season: 17,
						number: 7,
						airdate: '2013-11-13',
						airtime: '21:00',
						airstamp: '2013-11-14T02:00:00+00:00',
						runtime: 90,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188145.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188145.jpg',
						},
						summary:
							"It's the biggest Black Friday sale in history. The boys are divided over which gaming device to buy and a bloody battle will determine whether Xbox or Sony will be the winner.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8162',
							},
						},
					},
					{
						id: 8163,
						url:
							'http://www.tvmaze.com/episodes/8163/south-park-17x08-a-song-of-ass-and-fire',
						name: 'A Song of Ass and Fire',
						season: 17,
						number: 8,
						airdate: '2013-11-20',
						airtime: '22:00',
						airstamp: '2013-11-21T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188144.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188144.jpg',
						},
						summary:
							'Console wars escalate as throngs of shoppers push toward the mall in anticipation of Black Friday. Meanwhile, Cartman seeks revenge against Princess Kenny.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8163',
							},
						},
					},
					{
						id: 8164,
						url:
							'http://www.tvmaze.com/episodes/8164/south-park-17x09-titties-and-dragons',
						name: 'Titties and Dragons',
						season: 17,
						number: 9,
						airdate: '2013-12-04',
						airtime: '22:00',
						airstamp: '2013-12-05T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188143.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188143.jpg',
						},
						summary:
							'The war over gaming devices begins as the malls open for the holiday-shopping craze.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8164',
							},
						},
					},
					{
						id: 8165,
						url:
							'http://www.tvmaze.com/episodes/8165/south-park-17x10-the-hobbit',
						name: 'The Hobbit',
						season: 17,
						number: 10,
						airdate: '2013-12-11',
						airtime: '22:00',
						airstamp: '2013-12-12T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/62/156316.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/62/156316.jpg',
						},
						summary:
							"Wendy plays matchmaker by trying to pair one of her gal pals with Butters, only to end up in the counselor's office.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8165',
							},
						},
					},
					{
						id: 8166,
						url:
							'http://www.tvmaze.com/episodes/8166/south-park-18x01-go-fund-yourself',
						name: 'Go Fund Yourself',
						season: 18,
						number: 1,
						airdate: '2014-09-24',
						airtime: '22:00',
						airstamp: '2014-09-25T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188141.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188141.jpg',
						},
						summary:
							'The group attempt to make a kickstarter company to raise money instead of going to school. The episode focuses on kickstarter and how people can make money before producing a product.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8166',
							},
						},
					},
					{
						id: 8167,
						url:
							'http://www.tvmaze.com/episodes/8167/south-park-18x02-gluten-free-ebola',
						name: 'Gluten Free Ebola',
						season: 18,
						number: 2,
						airdate: '2014-10-01',
						airtime: '22:00',
						airstamp: '2014-10-02T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188140.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188140.jpg',
						},
						summary:
							'After the group attempted a kickstarter company in a previous episode they are hated by everyone else at school so attempt to throw a party whilst the town is thrown into chaos over the threat of gluten.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8167',
							},
						},
					},
					{
						id: 8168,
						url:
							'http://www.tvmaze.com/episodes/8168/south-park-18x03-the-cissy',
						name: 'The Cissy',
						season: 18,
						number: 3,
						airdate: '2014-10-08',
						airtime: '22:00',
						airstamp: '2014-10-09T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188139.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188139.jpg',
						},
						summary:
							"Stan is searching for answers about how a person who he's always known to be one thing could suddenly identify with another. In the meantime, the pressure of holding on to a giant secret is starting to get to Randy.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8168',
							},
						},
					},
					{
						id: 13094,
						url:
							'http://www.tvmaze.com/episodes/13094/south-park-18x04-handicar',
						name: 'Handicar',
						season: 18,
						number: 4,
						airdate: '2014-10-15',
						airtime: '22:00',
						airstamp: '2014-10-16T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188138.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188138.jpg',
						},
						summary:
							'Handicapped driven vehicles compete with taxi\'s and other vehicles. The company entitled "Handicar" with the lead driver being Timmy.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/13094',
							},
						},
					},
					{
						id: 14874,
						url:
							'http://www.tvmaze.com/episodes/14874/south-park-18x05-the-magic-bush',
						name: 'The Magic Bush',
						season: 18,
						number: 5,
						airdate: '2014-10-29',
						airtime: '22:00',
						airstamp: '2014-10-30T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/2/6394.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/2/6394.jpg',
						},
						summary:
							'A scandalous invasion of privacy makes the South Park denizens edgy as Cartman and Butters get in possession of a drone.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/14874',
							},
						},
					},
					{
						id: 38926,
						url:
							'http://www.tvmaze.com/episodes/38926/south-park-18x06-freemium-isnt-free',
						name: "Freemium Isn't Free",
						season: 18,
						number: 6,
						airdate: '2014-11-05',
						airtime: '22:00',
						airstamp: '2014-11-06T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/3/8072.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/3/8072.jpg',
						},
						summary:
							"Stan's addicted to a new app marketed by Terrance and Phillip, but the duo find that all the money they're making can't buy happiness.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/38926',
							},
						},
					},
					{
						id: 38927,
						url:
							'http://www.tvmaze.com/episodes/38927/south-park-18x07-grounded-vindaloop',
						name: 'Grounded Vindaloop',
						season: 18,
						number: 7,
						airdate: '2014-11-12',
						airtime: '22:00',
						airstamp: '2014-11-13T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/4/10510.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/4/10510.jpg',
						},
						summary:
							"Butters is convinced that he's living in a virtual reality. When he suddenly goes rogue and wreaks havoc at home and all over South Park, everyone struggles to figure out what's real.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/38927',
							},
						},
					},
					{
						id: 40628,
						url:
							'http://www.tvmaze.com/episodes/40628/south-park-18x08-cock-magic',
						name: 'Cock Magic',
						season: 18,
						number: 8,
						airdate: '2014-11-19',
						airtime: '22:00',
						airstamp: '2014-11-20T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/4/11485.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/4/11485.jpg',
						},
						summary:
							"Kenny excels at playing the game, Magic: The Gathering. He has the boys' full attention until a new, hard-core activity gets in the way. When Wendy tries to get Stan to pay attention to what she's doing, she realizes that what he does with his guy friends always comes first.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/40628',
							},
						},
					},
					{
						id: 46977,
						url:
							'http://www.tvmaze.com/episodes/46977/south-park-18x09-rehash',
						name: '#rehash',
						season: 18,
						number: 9,
						airdate: '2014-12-03',
						airtime: '22:00',
						airstamp: '2014-12-04T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/5/14896.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/5/14896.jpg',
						},
						summary:
							"Randy's forced to perform again after Stan spends all the Marsh's money on freemium games; Kyle gets upset when Ike doesn't want to play with him anymore.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/46977',
							},
						},
					},
					{
						id: 46978,
						url:
							'http://www.tvmaze.com/episodes/46978/south-park-18x10-happyholograms',
						name: '#HappyHolograms',
						season: 18,
						number: 10,
						airdate: '2014-12-10',
						airtime: '22:00',
						airstamp: '2014-12-11T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/75/188137.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/75/188137.jpg',
						},
						summary:
							'Kyle plans a holiday special for TV in hopes of bringing families together again with help from some of the biggest names in entertainment. Meanwhile, Cartmaaan Bra is still trending as holograms continue to run rampant in South Park.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/46978',
							},
						},
					},
					{
						id: 201455,
						url:
							'http://www.tvmaze.com/episodes/201455/south-park-19x01-stunning-and-brave',
						name: 'Stunning and Brave',
						season: 19,
						number: 1,
						airdate: '2015-09-16',
						airtime: '22:00',
						airstamp: '2015-09-17T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/19/47779.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/19/47779.jpg',
						},
						summary:
							"There is a new principal at the helm of South Park Elementary. He forces the boys to confront the damage they've done through their history of racism and unconscious bias.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/201455',
							},
						},
					},
					{
						id: 252182,
						url:
							'http://www.tvmaze.com/episodes/252182/south-park-19x02-where-my-country-gone',
						name: 'Where My Country Gone?',
						season: 19,
						number: 2,
						airdate: '2015-09-23',
						airtime: '22:00',
						airstamp: '2015-09-24T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/21/52749.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/21/52749.jpg',
						},
						summary:
							'Tired of illegal immigrants continuously crossing over the border into the United States without any repercussions, Mr. Garrison wants a wall to be built to keep them out of the country.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/252182',
							},
						},
					},
					{
						id: 236712,
						url:
							'http://www.tvmaze.com/episodes/236712/south-park-19x03-the-city-part-of-town',
						name: 'The City Part of Town',
						season: 19,
						number: 3,
						airdate: '2015-09-30',
						airtime: '22:00',
						airstamp: '2015-10-01T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/22/55884.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/22/55884.jpg',
						},
						summary:
							'Kenny tries to land a job when the town of South Park begins gentrifying.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/236712',
							},
						},
					},
					{
						id: 330855,
						url:
							'http://www.tvmaze.com/episodes/330855/south-park-19x04-youre-not-yelping',
						name: "You're Not Yelping",
						season: 19,
						number: 4,
						airdate: '2015-10-14',
						airtime: '22:00',
						airstamp: '2015-10-15T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/24/60177.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/24/60177.jpg',
						},
						summary:
							'Cartman considers himself the top on-line restaurant reviewer in South Park.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/330855',
							},
						},
					},
					{
						id: 8177,
						url:
							'http://www.tvmaze.com/episodes/8177/south-park-19x05-safe-space',
						name: 'Safe Space',
						season: 19,
						number: 5,
						airdate: '2015-10-21',
						airtime: '22:00',
						airstamp: '2015-10-22T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/25/63909.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/25/63909.jpg',
						},
						summary:
							'Cartman is the latest victim of Body Shaming.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/8177',
							},
						},
					},
					{
						id: 186412,
						url:
							'http://www.tvmaze.com/episodes/186412/south-park-19x06-tweek-x-craig',
						name: 'Tweek x Craig',
						season: 19,
						number: 6,
						airdate: '2015-10-28',
						airtime: '22:00',
						airstamp: '2015-10-29T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/26/67204.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/26/67204.jpg',
						},
						summary:
							'The news of a romantic relationship between Tweek and Craig hits South Park Elementary.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/186412',
							},
						},
					},
					{
						id: 153319,
						url:
							'http://www.tvmaze.com/episodes/153319/south-park-19x07-naughty-ninjas',
						name: 'Naughty Ninjas',
						season: 19,
						number: 7,
						airdate: '2015-11-11',
						airtime: '22:00',
						airstamp: '2015-11-12T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/31/77848.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/31/77848.jpg',
						},
						summary:
							"A game of Ninja Warriors is led by Kenny and attracts attention from foreign terrorists. Meanwhile, the citizens of South Park decide they don't need a police department anymore.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/153319',
							},
						},
					},
					{
						id: 153070,
						url:
							'http://www.tvmaze.com/episodes/153070/south-park-19x08-sponsored-content',
						name: 'Sponsored Content',
						season: 19,
						number: 8,
						airdate: '2015-11-18',
						airtime: '22:00',
						airstamp: '2015-11-19T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/31/77847.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/31/77847.jpg',
						},
						summary:
							'Jimmy challenges PC Principal when the budding newsman is flagged for inappropriate language in the school paper.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/153070',
							},
						},
					},
					{
						id: 153069,
						url:
							'http://www.tvmaze.com/episodes/153069/south-park-19x09-truth-and-advertising',
						name: 'Truth and Advertising',
						season: 19,
						number: 9,
						airdate: '2015-12-02',
						airtime: '22:00',
						airstamp: '2015-12-03T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/36/91091.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/36/91091.jpg',
						},
						summary:
							'PC Principal disappears along with 2 fourth grade students. The latest news in the school paper sets the boys on a search to find their two missing classmates. Being the crack reporter that he is, Jimmy sets out to learn everything he can about what makes Leslie tick. Meanwhile, Principal Victoria and Mr. Garrison return to a South Park that has become unrecognizable',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/153069',
							},
						},
					},
					{
						id: 391098,
						url:
							'http://www.tvmaze.com/episodes/391098/south-park-19x10-pc-principal-final-justice',
						name: 'PC Principal Final Justice',
						season: 19,
						number: 10,
						airdate: '2015-12-09',
						airtime: '22:00',
						airstamp: '2015-12-10T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/34/86070.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/34/86070.jpg',
						},
						summary:
							'Kyle has chosen a dangerous alliance over his friendship with Stan.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/391098',
							},
						},
					},
					{
						id: 772755,
						url:
							'http://www.tvmaze.com/episodes/772755/south-park-20x01-member-berries',
						name: 'Member Berries',
						season: 20,
						number: 1,
						airdate: '2016-09-14',
						airtime: '22:00',
						airstamp: '2016-09-15T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/74/186658.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/74/186658.jpg',
						},
						summary:
							'An American icon gives the National Anthem a reboot.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/772755',
							},
						},
					},
					{
						id: 924464,
						url:
							'http://www.tvmaze.com/episodes/924464/south-park-20x02-skank-hunt',
						name: 'Skank Hunt',
						season: 20,
						number: 2,
						airdate: '2016-09-21',
						airtime: '22:00',
						airstamp: '2016-09-22T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/76/190334.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/76/190334.jpg',
						},
						summary:
							'An online troll threatens to have global implications as Cartman professes his innocence.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/924464',
							},
						},
					},
					{
						id: 924465,
						url:
							'http://www.tvmaze.com/episodes/924465/south-park-20x03-the-damned',
						name: 'The Damned',
						season: 20,
						number: 3,
						airdate: '2016-09-28',
						airtime: '22:00',
						airstamp: '2016-09-29T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/77/193131.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/77/193131.jpg',
						},
						summary:
							'Gerald basks in the thrill of media attention as he continues to troll everyone.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/924465',
							},
						},
					},
					{
						id: 924466,
						url:
							'http://www.tvmaze.com/episodes/924466/south-park-20x04-wieners-out',
						name: 'Wieners Out',
						season: 20,
						number: 4,
						airdate: '2016-10-12',
						airtime: '22:00',
						airstamp: '2016-10-13T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/79/199643.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/79/199643.jpg',
						},
						summary:
							'Kyle feels guilty for the tension between the boys and the girls, but Butters brings his gender together to stand up for their rights. Meanwhile, Gerald is worried that his cover may be blown.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/924466',
							},
						},
					},
					{
						id: 924467,
						url:
							'http://www.tvmaze.com/episodes/924467/south-park-20x05-douche-and-a-danish',
						name: 'Douche and a Danish',
						season: 20,
						number: 5,
						airdate: '2016-10-19',
						airtime: '22:00',
						airstamp: '2016-10-20T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/81/203060.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/81/203060.jpg',
						},
						summary:
							'Garrison finally goes too far at a rally and reconsiders his future in politics. Meanwhile, the kids begin searching for an infamous Internet troll; and Gerald joins the opposition to a Danish campaign tracking nefarious characters on the Web.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/924467',
							},
						},
					},
					{
						id: 924468,
						url:
							'http://www.tvmaze.com/episodes/924468/south-park-20x06-fort-collins',
						name: 'Fort Collins',
						season: 20,
						number: 6,
						airdate: '2016-10-26',
						airtime: '22:00',
						airstamp: '2016-10-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/82/205573.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/82/205573.jpg',
						},
						summary:
							'An entire city in Colorado gets hacked. Gerald and Cartman may lose everything when their complete history of internet activity becomes public.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/924468',
							},
						},
					},
					{
						id: 924469,
						url:
							'http://www.tvmaze.com/episodes/924469/south-park-20x07-oh-jeez',
						name: 'Oh Jeez',
						season: 20,
						number: 7,
						airdate: '2016-11-09',
						airtime: '22:00',
						airstamp: '2016-11-10T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/84/210472.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/84/210472.jpg',
						},
						summary:
							'PC Principal plays peacemaker between the girls and the boys one more time. Meanwhile, the election results are in, and Gerald is confronted by the Troll Hunter.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/924469',
							},
						},
					},
					{
						id: 924470,
						url:
							'http://www.tvmaze.com/episodes/924470/south-park-20x08-members-only',
						name: 'Members Only',
						season: 20,
						number: 8,
						airdate: '2016-11-16',
						airtime: '22:00',
						airstamp: '2016-11-17T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/85/212694.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/85/212694.jpg',
						},
						summary: 'The new President-elect visits his hometown.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/924470',
							},
						},
					},
					{
						id: 924471,
						url:
							'http://www.tvmaze.com/episodes/924471/south-park-20x09-not-funny',
						name: 'Not Funny',
						season: 20,
						number: 9,
						airdate: '2016-11-30',
						airtime: '22:00',
						airstamp: '2016-12-01T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/87/218044.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/87/218044.jpg',
						},
						summary:
							'Cartman becomes convinced that Butters wants to steal his girlfriend.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/924471',
							},
						},
					},
					{
						id: 924472,
						url:
							'http://www.tvmaze.com/episodes/924472/south-park-20x10-the-end-of-serialization-as-we-know-it',
						name: 'The End of Serialization as We Know It',
						season: 20,
						number: 10,
						airdate: '2016-12-07',
						airtime: '22:00',
						airstamp: '2016-12-08T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/88/220590.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/88/220590.jpg',
						},
						summary:
							'Cartman finally understands why Heidi wants him to get to Mars.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/924472',
							},
						},
					},
					{
						id: 1174751,
						url:
							'http://www.tvmaze.com/episodes/1174751/south-park-21x01-white-people-renovating-houses',
						name: 'White People Renovating Houses',
						season: 21,
						number: 1,
						airdate: '2017-09-13',
						airtime: '22:00',
						airstamp: '2017-09-14T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/127/319138.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/127/319138.jpg',
						},
						summary:
							"Protestors armed with tiki torches and confederate flags take to the streets of South Park; Randy comes to grips with what it means to be white in today's society.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1174751',
							},
						},
					},
					{
						id: 1299703,
						url:
							'http://www.tvmaze.com/episodes/1299703/south-park-21x02-put-it-down',
						name: 'Put It Down',
						season: 21,
						number: 2,
						airdate: '2017-09-20',
						airtime: '22:00',
						airstamp: '2017-09-21T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/128/321340.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/128/321340.jpg',
						},
						summary:
							'North Korea takes aim at South Park. While Craig and Tweek have problems trying to find a place to hide.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1299703',
							},
						},
					},
					{
						id: 1299704,
						url:
							'http://www.tvmaze.com/episodes/1299704/south-park-21x03-holiday-special',
						name: 'Holiday Special',
						season: 21,
						number: 3,
						airdate: '2017-09-27',
						airtime: '22:00',
						airstamp: '2017-09-28T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/129/323278.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/129/323278.jpg',
						},
						summary:
							'Everyone is going crazy as Columbus Day gets canceled and the kids try to bring it back as they would have a free day.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1299704',
							},
						},
					},
					{
						id: 1299705,
						url:
							'http://www.tvmaze.com/episodes/1299705/south-park-21x04-franchise-prequel',
						name: 'Franchise Prequel',
						season: 21,
						number: 4,
						airdate: '2017-10-11',
						airtime: '22:00',
						airstamp: '2017-10-12T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/131/327549.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/131/327549.jpg',
						},
						summary:
							'Facebook is the ultimate weapon for Professor Chaos.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1299705',
							},
						},
					},
					{
						id: 1175033,
						url:
							'http://www.tvmaze.com/episodes/1175033/south-park-21x05-hummels-heroin',
						name: 'Hummels & Heroin',
						season: 21,
						number: 5,
						airdate: '2017-10-18',
						airtime: '22:00',
						airstamp: '2017-10-19T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/131/329554.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/131/329554.jpg',
						},
						summary:
							'Beloved entertainers are being cut down in their prime due to massive overdoses of opiates. Stan is about to be exposed as the source of the illegal drugs.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1175033',
							},
						},
					},
					{
						id: 1175034,
						url:
							'http://www.tvmaze.com/episodes/1175034/south-park-21x06-sons-a-witches',
						name: 'Sons a Witches',
						season: 21,
						number: 6,
						airdate: '2017-10-25',
						airtime: '22:00',
						airstamp: '2017-10-26T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/132/331582.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/132/331582.jpg',
						},
						summary:
							"This year at the traditional Halloween get together, a witch casts a spell that terrorizes the town and ruins Halloween for the boys. Cartman sees a way to use the witch's power to his advantage.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1175034',
							},
						},
					},
					{
						id: 1175035,
						url:
							'http://www.tvmaze.com/episodes/1175035/south-park-21x07-doubling-down',
						name: 'Doubling Down',
						season: 21,
						number: 7,
						airdate: '2017-11-08',
						airtime: '22:00',
						airstamp: '2017-11-09T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/134/335990.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/134/335990.jpg',
						},
						summary:
							"Kyle is playing with fire when he gets in the middle of Cartman and Heidi's relationship.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1175035',
							},
						},
					},
					{
						id: 1175036,
						url:
							'http://www.tvmaze.com/episodes/1175036/south-park-21x08-moss-piglets',
						name: 'Moss Piglets',
						season: 21,
						number: 8,
						airdate: '2017-11-15',
						airtime: '22:00',
						airstamp: '2017-11-16T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/135/338225.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/135/338225.jpg',
						},
						summary:
							"Timmy and Jimmy's science project has caught the attention of some very important people who think it can save the world.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1175036',
							},
						},
					},
					{
						id: 1175037,
						url:
							'http://www.tvmaze.com/episodes/1175037/south-park-21x09-super-hard-pcness',
						name: 'Super Hard PCness',
						season: 21,
						number: 9,
						airdate: '2017-11-29',
						airtime: '22:00',
						airstamp: '2017-11-30T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/136/342339.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/136/342339.jpg',
						},
						summary:
							"It's never been more challenging to be a PC Principal.Witness the return of Terrance and Philip via the power of Netflix! Kyle isn't impressed. Meanwhile, PC Principal falls in love with the new Vice-Principal...",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1175037',
							},
						},
					},
					{
						id: 1175038,
						url:
							'http://www.tvmaze.com/episodes/1175038/south-park-21x10-splatty-tomato',
						name: 'Splatty Tomato',
						season: 21,
						number: 10,
						airdate: '2017-12-06',
						airtime: '22:00',
						airstamp: '2017-12-07T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/137/344773.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/137/344773.jpg',
						},
						summary:
							'The children of South Park claim to have seen Mr. Garrison lurking around town, and the townspeople are angry that the president is scaring their kids.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1175038',
							},
						},
					},
					{
						id: 1494862,
						url:
							'http://www.tvmaze.com/episodes/1494862/south-park-22x01-dead-kids',
						name: 'Dead Kids',
						season: 22,
						number: 1,
						airdate: '2018-09-26',
						airtime: '22:00',
						airstamp: '2018-09-27T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/169/423756.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/169/423756.jpg',
						},
						summary:
							"With several shooting occurring at South Park Elementary School, Randy attempts to get Sharon to get her emotions in check. Meanwhile, Cartman is mad after realizing he flunked his math quiz, despite copying his answers off Token's quiz.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1494862',
							},
						},
					},
					{
						id: 1536450,
						url:
							'http://www.tvmaze.com/episodes/1536450/south-park-22x02-a-boy-and-a-priest',
						name: 'A Boy and a Priest',
						season: 22,
						number: 2,
						airdate: '2018-10-03',
						airtime: '22:00',
						airstamp: '2018-10-04T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/169/424723.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/169/424723.jpg',
						},
						summary:
							'A very special relationship has developed between Butters and the Parish Priest. When the town finds the church doors locked and no sign of the pair, they call in the Catholic Church. ',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1536450',
							},
						},
					},
					{
						id: 1536451,
						url:
							'http://www.tvmaze.com/episodes/1536451/south-park-22x03-the-problem-with-a-poo',
						name: 'The Problem with a Poo',
						season: 22,
						number: 3,
						airdate: '2018-10-10',
						airtime: '22:00',
						airstamp: '2018-10-11T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/171/428011.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/171/428011.jpg',
						},
						summary:
							"Mr. Hankey's offensive behavior puts him in jeopardy of being fired as the Director of the Annual Christmas Pageant.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1536451',
							},
						},
					},
					{
						id: 1536452,
						url:
							'http://www.tvmaze.com/episodes/1536452/south-park-22x04-tegridy-farms',
						name: 'Tegridy Farms',
						season: 22,
						number: 4,
						airdate: '2018-10-17',
						airtime: '22:00',
						airstamp: '2018-10-18T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/171/429971.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/171/429971.jpg',
						},
						summary:
							'The Vaping epidemic hits South Park Elementary',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1536452',
							},
						},
					},
					{
						id: 1536453,
						url:
							'http://www.tvmaze.com/episodes/1536453/south-park-22x05-the-scoots',
						name: 'The Scoots',
						season: 22,
						number: 5,
						airdate: '2018-10-31',
						airtime: '22:00',
						airstamp: '2018-11-01T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/173/433696.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/173/433696.jpg',
						},
						summary:
							'The kids plan to use the latest revolution in mobility to get more candy on Halloween than they have ever gotten before.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1536453',
							},
						},
					},
					{
						id: 1536454,
						url:
							'http://www.tvmaze.com/episodes/1536454/south-park-22x06-time-to-get-cereal',
						name: 'Time to Get Cereal',
						season: 22,
						number: 6,
						airdate: '2018-11-07',
						airtime: '22:00',
						airstamp: '2018-11-08T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/174/435395.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/174/435395.jpg',
						},
						summary:
							"The boys realize they need Al Gore's help when dead citizens start popping up all over town.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1536454',
							},
						},
					},
					{
						id: 1536455,
						url:
							'http://www.tvmaze.com/episodes/1536455/south-park-22x07-nobody-got-cereal',
						name: 'Nobody Got Cereal?',
						season: 22,
						number: 7,
						airdate: '2018-11-14',
						airtime: '22:00',
						airstamp: '2018-11-15T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/174/437057.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/174/437057.jpg',
						},
						summary:
							'The boys break out of jail and are on the run from the police and ManBearPig.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1536455',
							},
						},
					},
					{
						id: 1536456,
						url:
							'http://www.tvmaze.com/episodes/1536456/south-park-22x08-buddha-box',
						name: 'Buddha Box',
						season: 22,
						number: 8,
						airdate: '2018-11-28',
						airtime: '22:00',
						airstamp: '2018-11-29T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/176/440047.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/176/440047.jpg',
						},
						summary:
							'In "Buddha Box," Cartman discovered a foolproof way to tune out the rest of the world and enjoy some quality time on his phone.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1536456',
							},
						},
					},
					{
						id: 1536457,
						url:
							'http://www.tvmaze.com/episodes/1536457/south-park-22x09-unfulfilled',
						name: 'Unfulfilled',
						season: 22,
						number: 9,
						airdate: '2018-12-05',
						airtime: '22:00',
						airstamp: '2018-12-06T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/176/441526.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/176/441526.jpg',
						},
						summary:
							'The citizens of South Park are enjoying all the perks of being a company town when the Amazon Fulfillment Center moves in. Everything is just swell until the contradictions inherent in capitalism threaten to bring the entire system down.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1536457',
							},
						},
					},
					{
						id: 1536458,
						url:
							'http://www.tvmaze.com/episodes/1536458/south-park-22x10-bike-parade',
						name: 'Bike Parade',
						season: 22,
						number: 10,
						airdate: '2018-12-12',
						airtime: '22:00',
						airstamp: '2018-12-13T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/177/442977.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/177/442977.jpg',
						},
						summary:
							"The Bike Parade is still on, but the boys' chance of winning is in jeopardy when Kenny resists commercialism in solidarity with the Amazon Fulfillment Center's striking workers.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1536458',
							},
						},
					},
					{
						id: 1684517,
						url:
							'http://www.tvmaze.com/episodes/1684517/south-park-23x01-mexican-joker',
						name: 'Mexican Joker',
						season: 23,
						number: 1,
						airdate: '2019-09-25',
						airtime: '22:00',
						airstamp: '2019-09-26T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/212/531869.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/212/531869.jpg',
						},
						summary:
							'Randy fights against home-grown. Meanwhile, Kyle goes to camp.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1684517',
							},
						},
					},
					{
						id: 1707981,
						url:
							'http://www.tvmaze.com/episodes/1707981/south-park-23x02-band-in-china',
						name: 'Band in China',
						season: 23,
						number: 2,
						airdate: '2019-10-02',
						airtime: '22:00',
						airstamp: '2019-10-03T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/213/534300.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/213/534300.jpg',
						},
						summary:
							'Randy sees an opportunity for Tegridy in China.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1707981',
							},
						},
					},
					{
						id: 1707982,
						url:
							'http://www.tvmaze.com/episodes/1707982/south-park-23x03-shots',
						name: 'Shots!!!',
						season: 23,
						number: 3,
						airdate: '2019-10-09',
						airtime: '22:00',
						airstamp: '2019-10-10T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/214/536895.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/214/536895.jpg',
						},
						summary:
							'Randy celebrates the success of Tegridy Farms; Cartman refuses to get a shot.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1707982',
							},
						},
					},
					{
						id: 1707983,
						url:
							'http://www.tvmaze.com/episodes/1707983/south-park-23x04-let-them-eat-goo',
						name: 'Let Them Eat Goo',
						season: 23,
						number: 4,
						airdate: '2019-10-16',
						airtime: '22:00',
						airstamp: '2019-10-17T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/216/540007.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/216/540007.jpg',
						},
						summary:
							'The citizens of South Park are moving toward a completely plant-based diet. Cartman is pretty sure the new food in the cafeteria gave him a heart attack.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1707983',
							},
						},
					},
					{
						id: 1707984,
						url:
							'http://www.tvmaze.com/episodes/1707984/south-park-23x05-tegridy-farms-halloween-special',
						name: 'Tegridy Farms Halloween Special',
						season: 23,
						number: 5,
						airdate: '2019-10-30',
						airtime: '22:00',
						airstamp: '2019-10-31T02:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/218/545140.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/218/545140.jpg',
						},
						summary:
							"It's Halloween and Randy is dealing with his daughter's marijuana problem. Butters gets an unexpected surprise when he visits the Egyptian Artifact exhibit at the Denver Museum.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1707984',
							},
						},
					},
					{
						id: 1707985,
						url:
							'http://www.tvmaze.com/episodes/1707985/south-park-23x06-season-finale',
						name: 'Season Finale',
						season: 23,
						number: 6,
						airdate: '2019-11-06',
						airtime: '22:00',
						airstamp: '2019-11-07T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/219/548527.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/219/548527.jpg',
						},
						summary:
							"The Mayor has evidence that Randy blew up his neighbor's yards in protest over homegrown weed and then blamed it on a Mexican Joker. Now the citizens of South Park have had enough of Randy and Tegridy Farms and they just want to lock him up.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1707985',
							},
						},
					},
					{
						id: 1750707,
						url:
							'http://www.tvmaze.com/episodes/1750707/south-park-23x07-board-girls',
						name: 'Board Girls',
						season: 23,
						number: 7,
						airdate: '2019-11-13',
						airtime: '22:00',
						airstamp: '2019-11-14T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/223/558917.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/223/558917.jpg',
						},
						summary:
							'The annual Strong Woman competition pushes everyone to their limits.',
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1750707',
							},
						},
					},
					{
						id: 1750708,
						url:
							'http://www.tvmaze.com/episodes/1750708/south-park-23x08-turd-burglars',
						name: 'Turd Burglars',
						season: 23,
						number: 8,
						airdate: '2019-11-27',
						airtime: '22:00',
						airstamp: '2019-11-28T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/228/571163.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/228/571163.jpg',
						},
						summary:
							"Kyle's mom has a fecal transplant and the boys are on a quest for the best microbiome.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1750708',
							},
						},
					},
					{
						id: 1750709,
						url:
							'http://www.tvmaze.com/episodes/1750709/south-park-23x09-basic-cable',
						name: 'Basic Cable',
						season: 23,
						number: 9,
						airdate: '2019-12-04',
						airtime: '22:00',
						airstamp: '2019-12-05T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/229/574347.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/229/574347.jpg',
						},
						summary:
							"Scott Malkinson's future with the new girl in his class depends on him getting the latest and greatest streaming platform. Scott's dad works for the local cable company and refuses to move beyond basic cable.",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1750709',
							},
						},
					},
					{
						id: 1750710,
						url:
							'http://www.tvmaze.com/episodes/1750710/south-park-23x10-christmas-snow',
						name: 'Christmas Snow',
						season: 23,
						number: 10,
						airdate: '2019-12-11',
						airtime: '22:00',
						airstamp: '2019-12-12T03:00:00+00:00',
						runtime: 30,
						image: {
							medium:
								'http://static.tvmaze.com/uploads/images/medium_landscape/230/577329.jpg',
							original:
								'http://static.tvmaze.com/uploads/images/original_untouched/230/577329.jpg',
						},
						summary:
							"It's a bleak Christmas Season in South Park this year and it's all Santa's fault. He is single handedly stealing the joy from the holiday. The town just wants their Christmas Spirit back but that will take a Christmas miracle. ",
						_links: {
							self: {
								href: 'http://api.tvmaze.com/episodes/1750710',
							},
						},
					},
				],
			},
		},
	},
});
