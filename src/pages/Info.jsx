/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import { useState } from "react"
import MainLayout from "../layouts/MainLayout";
import axios from "axios";

const tokenData = JSON.parse(localStorage.getItem("token"));

const apiUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'http://ec2-35-93-20-121.us-west-2.compute.amazonaws.com';

const Info = () => {
    const [cName, setName] = useState();
    const [cGender, setGender] = useState("Male");
    const [cClass, setClass] = useState("");
    const [cAncestry, setAncestry] = useState("");
    const [cBackground, setBackground] = useState("");

    const fetchName = async () => {
        try {
            const response = await axios.get(`https://namey.muffinlabs.com/name.json?count=1&type=${cGender}&with_surname=true`);
            setName(response.data[0]); 
            const nameInputElement = document.getElementById("charName");
            nameInputElement.value = cName;
        } catch (error) {
            console.error("Error fetching random names: ", error);
        }
    };

    function calculateMight() {
        var might = 0
        if (cClass == "Fighter")
            might += 1
        if (cAncestry == "Dwarf" || cAncestry == "Human")
            might += 1
        if (cBackground == "Folk Hero" || cBackground == "Outlander" || cBackground == "Soldier")
            might += 1
        return might
    }

    function calculateDexterity() {
        var dexterity = 0
        if (cClass == "Rogue")
            dexterity += 1
        if (cAncestry == "Elf" || cAncestry == "Halfling")
            dexterity += 1
        if (cBackground == "Artisan" || cBackground == "Criminal" || cBackground == "Soldier")
            dexterity += 1
        return dexterity
    }

    function calculateIntellect() {
        var intellect = 0
        if (cClass == "Wizard")
            intellect += 1
        if (cAncestry == "Elf" || cAncestry == "Human")
            intellect += 1
        if (cBackground == "Acolyte" || cBackground == "Artisan" || cBackground == "Outlander")
            intellect += 1
        return intellect
    }

    function calculateCharisma() {
        var charisma = 0
        if (cClass == "Cleric")
            charisma += 1
        if (cAncestry == "Dwarf" || cAncestry == "Halfling")
            charisma += 1
        if (cBackground == "Acolyte" || cBackground == "Criminal" || cBackground == "Folk Hero")
            charisma += 1
        return charisma
    }

    const createCharacter = async () => {
        const cMight = calculateMight()
        const cDexterity = calculateDexterity()
        const cIntellect = calculateIntellect()
        const cCharisma = calculateCharisma()
        try {
            const response = await fetch(`${apiUrl}/api/character/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify({
                    name: cName, gender: cGender, charClass: cClass,
                    ancestry: cAncestry, background: cBackground,
                    might: cMight, dexterity: cDexterity, intellect: cIntellect, charisma: cCharisma
                })
            });

            if (!response.ok) {
                const errorBody = await response.json().catch(() => ({}));
                console.error("Server responded with error:", response.status, errorBody);
                throw new Error(`Server error ${response.status}`);
            }

            const data = await response.json();
            console.log("Character created:", data);
        } catch (error) {
            console.error("Error creating character: ", error);
        }
    }

	return (
		<MainLayout title="Character Info">
			<div className="container-fluid vh-100 mt-4">
				<div className="row py-3" id="info">
					<div className="col-sm-2">
                        <input placeholder="Character Name" id="charName"
                            onChange={(e) => setName(e.target.value)} />
					</div>
					<div className="col-sm-1">
						<label>
							<input type="radio" name="gender" id="genderBtn" value="male"
                                onChange={(e) => setGender(e.target.value)} />
							Male
						</label>
					</div>
					<div className="col-sm-1">
						<label>
							<input type="radio" name="gender" id="genderBtn" value="female"
                                onChange={(e) => setGender(e.target.value)} />
							Female
						</label>
					</div>
					<div className="col-sm-2">
						<button onClick={fetchName}>Generate Random Name</button>
					</div>
				</div>
                <div className="row py-3" id="classInfo">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Description</th>
                                <th>Mechanics</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col-1">
                                    <label>
                                        <input type="radio" name="class" id="classBtn" value="Cleric"
                                            onChange={(e) => setClass(e.target.value)} />
                                        Cleric
                                    </label>
                                </td>
                                <td className="col-9">In faith and the miracles of the divine, many find a greater purpose. Called to serve powers beyond most mortal understanding, all priests preach wonders and provide for the spiritual needs of their people. Clerics are more than mere priests, though; these emissaries of the divine work the will of their deities through Strength of arms and the magic of their gods. Devoted to the tenets of the religions and philosophies that inspire them, these ecclesiastics quest to spread the Knowledge and influence of their faith. Yet while they might share similar abilities, clerics prove as different from one another as the divinities they serve, with some offering Healing and redemption, others judging law and truth, and still others spreading conflict and corruption. The ways of the cleric are varied, yet all who tread these paths walk with the mightiest of allies and bear the arms of the gods themselves.</td>
                                <td>+1 Charisma<br />Mastery in Religion, Expertise in Insight, Medicine, Persuasion, </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <input type="radio" name="class" id="classBtn" value="Fighter"
                                            onChange={(e) => setClass(e.target.value)}/>
                                        Fighter
                                    </label>
                                </td>
                                <td>Some take up arms for glory, wealth, or revenge. Others do battle to prove themselves, to protect others, or because they know nothing else. Still others learn the ways of weaponcraft to hone their bodies in battle and prove their mettle in the forge of war. Lords of the battlefield, fighters are a disparate lot, training with many weapons or just one, perfecting the uses of armor, learning the fighting techniques of exotic masters, and studying the art of combat, all to shape themselves into living weapons. Far more than mere thugs, these skilled warriors reveal the true deadliness of their weapons, turning hunks of metal into arms capable of taming kingdoms, slaughtering monsters, and rousing the hearts of armies. Soldiers, knights, hunters, and artists of war, fighters are unparalleled champions, and woe to those who dare stand against them.</td>
                                <td>+1 Might<br />Expertise in Acrobatics, Athletics, Grappling, Intimidation, and Perception</td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <input type="radio" name="class" id="classBtn" value="Rogue"
                                            onChange={(e) => setClass(e.target.value)}/>
                                        Rogue
                                    </label>
                                </td>
                                <td>Life is an endless adventure for those who live by their wits. Ever just one step ahead of danger, rogues bank on their cunning, skill, and charm to bend fate to their favor. Never knowing what to expect, they prepare for everything, becoming masters of a wide variety of skills, training themselves to be adept manipulators, agile acrobats, shadowy stalkers, or masters of any of dozens of other professions or talents. Thieves and gamblers, fast talkers and diplomats, bandits and bounty hunters, and explorers and investigators all might be considered rogues, as well as countless other professions that rely upon wits, prowess, or luck. Although many rogues favor cities and the innumerable opportunities of civilization, some embrace lives on the road, journeying far, meeting exotic people, and facing fantastic danger in pursuit of equally fantastic riches. In the end, any who desire to shape their fates and live life on their own terms might come to be called rogues.</td>
                                <td>+1 Dexterity<br />Mastery in Acrobatics, Deception, Lockpicking, Stealth, and Sleight of Hand</td>
                            </tr>
                            <tr>
                                <td >
                                    <label>
                                        <input type="radio" name="class" id="classBtn" value="Wizard"
                                            onChange={(e) => setClass(e.target.value)}/>
                                        Wizard
                                    </label>
                                </td>
                                <td>Beyond the veil of the mundane hide the secrets of absolute power. The works of beings beyond mortals, the legends of realms where gods and spirits tread, the lore of creations both wondrous and terrible. Such mysteries call to those with the ambition and the intellect to rise above the common folk to grasp true might. Such is the path of the wizard. These shrewd magic-users seek, collect, and covet esoteric knowledge, drawing on cultic arts to work wonders beyond the abilities of mere mortals. While some might choose a particular field of magical study and become masters of such powers, others embrace versatility, reveling in the unbounded wonders of all magic. In either case, wizards prove a cunning and potent lot, capable of smiting their foes, empowering their allies, and shaping the world to their every desire.</td>
                                <td>+1 Intellect<br />Mastery in Arcana, Expertise in History, Investigation, and Insight</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row py-3" id="ancestryInfo">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>Ancestry</th>
                                <th>Description</th>
                                <th>Mechanics</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col-1">
                                    <label>
                                        <input type="radio" name="ancestry" id="dwarfBtn" value="Dwarf"
                                            onChange={(e) => setAncestry(e.target.value)}/>
                                        Dwarf
                                    </label>
                                </td>
                                <td className="col-9">Dwarves are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the depredations of savage races like orcs and goblins. More than any other race, the dwarves have acquired a reputation as dour and humorless craftsmen of the earth. It could be said that dwarven history shapes the dark disposition of many dwarves, for they reside in high mountains and dangerous realms below the earth, constantly at war with giants, goblins, and other such horrors. </td>
                                <td>+1 Might and Charisma</td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <input type="radio" name="ancestry" id="elfBtn" value="Elf"
                                            onChange={(e) => setAncestry(e.target.value)}/>
                                        Elf
                                    </label>
                                </td>
                                <td>The long-lived elves are children of the natural world, similar in many superficial ways to fey creatures, yet different as well. Elves value their privacy and traditions, and while they are often slow to make friends, at both the personal and national levels, once an Outsider is accepted as a comrade, such alliances can last for generations. Elves have a curious attachment to their surroundings, perhaps as a result of their incredibly long lifespans or some deeper, more mystical reason. Elves who dwell in a region for long find themselves physically adapting to match their surroundings, most noticeably taking on coloration reflecting the local environment. Those elves that spend their lives among the short-lived races, on the other hand, often develop a skewed Perception of mortality and become morose, the result of watching wave after wave of companions age and die before their eyes.</td>
                                <td>+1 Dexterity and Intellect</td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <input type="radio" name="ancestry" id="halflingBtn" value="Halfling"
                                            onChange={(e) => setAncestry(e.target.value)}/>
                                        Halfling
                                    </label>
                                </td>
                                <td>Optimistic and cheerful by nature, blessed with uncanny luck and driven by a powerful wanderlust, halflings make up for their short stature with an abundance of bravado and curiosity. At once excitable and easy-going, halflings like to keep an even temper and a steady eye on opportunity, and are not as prone as some of the more volatile races to violent or emotional outbursts. Even in the jaws of catastrophe, a Halfling almost never loses his sense of humor.

                                    Halflings are inveterate opportunists. Unable to physically defend themselves from the rigors of the world, they know when to bend with the wind and when to hide away. Yet a halfling's curiosity often overwhelms his good sense, leading to poor decisions and narrow escapes. </td>
                                <td>+1 Dexterity and Charisma</td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <input type="radio" name="ancestry" id="humanBtn" value="Human"
                                            onChange={(e) => setAncestry(e.target.value)}/>
                                        Human
                                    </label>
                                </td>
                                <td>Humans possess exceptional drive and a great capacity to endure and expand, and as such are currently the dominant race in the world. Their empires and nations are vast, sprawling things, and the citizens of these societies carve names for themselves with the Strength of their sword arms and the power of their spells. Humanity is best characterized by its tumultuousness and diversity, and human cultures run the gamut from savage but honorable tribes to decadent, devil-worshiping noble families in the most cosmopolitan cities. Human curiosity and ambition often triumph over their predilection for a sedentary lifestyle, and many leave their homes to explore the innumerable forgotten corners of the world or lead mighty armies to conquer their neighbors, simply because they can.</td>
                                <td>+1 Might and Intellect</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row py-3" id="backgroundInfo">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>
                                    <h1>Background</h1>
                                    <th>Description</th>
                                    <th>Mechanics</th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col-1">
                                    <label>
                                        <input type="radio" name="background" id="backgroundBtn"
                                            value="Acolyte" onChange={(e) => setBackground(e.target.value)}/>
                                        Acolyte
                                    </label>
                                </td>
                                <td className="col-9">You devoted yourself to service in a temple, either nestled in a town or secluded in a sacred grove. There you performed rites in honor of a god or pantheon. You served under a priest and studied religion.</td>
                                <td>+1 Intellect and Charisma</td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <input type="radio" name="background" id="backgroundBtn"
                                            value="Artisan" onChange={(e) => setBackground(e.target.value)}/>
                                        Artisan
                                    </label>
                                </td>
                                <td>You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.</td>
                                <td>+1 Dexterity and Intellect</td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <input type="radio" name="background" id="backgroundBtn"
                                            value="Criminal" onChange={(e) => setBackground(e.target.value)}/>
                                        Criminal
                                    </label>
                                </td>
                                <td>You eked out a living in dark alleyways, cutting purses or burgling shops. Perhaps you were part of a small gang of like-minded wrongdoers who looked out for each other. Or maybe you were a lone wolf, fending for yourself against the local thieves' guild and more fearsome lawbreakers.</td>
                                <td>+1 Dexterity and Charisma</td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <input type="radio" name="background" id="backgroundBtn"
                                            value="Folk Hero" onChange={(e) => setBackground(e.target.value)}/>
                                        Folk Hero
                                    </label>
                                </td>
                                <td>You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.</td>
                                <td>+1 Might and Charisma</td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <input type="radio" name="background" id="backgroundBtn"
                                            value="Outlander" onChange={(e) => setBackground(e.target.value)}/>
                                        Outlander
                                    </label>
                                </td>
                                <td>You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don't know the specific features of the terrain, you know the ways of the wild.</td>
                                <td>+1 Might and Intellect</td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        <input type="radio" name="background" id="backgroundBtn"
                                            value="Soldier" onChange={(e) => setBackground(e.target.value)}/>
                                        Soldier
                                    </label>
                                </td>
                                <td>You began training for war as soon as you reached adulthood and carry precious few memories of life before you took up arms. Battle is in your blood. Sometimes you catch yourself reflexively performing the basic fighting exercises you learned first. Eventually, you put that training to use on the battlefield, protecting the realm by waging war.</td>
                                <td>+1 Might and Dexterity</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link to="/characters">
                    <button onClick={createCharacter}>Confirm</button>
                </Link>
			</div>
		</MainLayout>
	)
}

export default Info