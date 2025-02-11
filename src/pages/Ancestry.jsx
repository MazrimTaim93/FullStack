/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";

const Ancestry = () => {
    return (
        <MainLayout title="Ancestry">
            <div className="container-fluid vh-100 mt-4">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>
                                <h1>Ancestry</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-1">
                                <label>
                                    <input type="radio" name="ancestry" id="dwarfBtn" value="dwarf"/>
                                    Dwarf
                                </label>
                            </td>
                            <td className="col-8">Dwarves are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the depredations of savage races like orcs and goblins. More than any other race, the dwarves have acquired a reputation as dour and humorless craftsmen of the earth. It could be said that dwarven history shapes the dark disposition of many dwarves, for they reside in high mountains and dangerous realms below the earth, constantly at war with giants, goblins, and other such horrors. </td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="ancestry" id="elfBtn" value="elf" />
                                    Elf
                                </label>
                            </td>
                            <td>The long-lived elves are children of the natural world, similar in many superficial ways to fey creatures, yet different as well. Elves value their privacy and traditions, and while they are often slow to make friends, at both the personal and national levels, once an Outsider is accepted as a comrade, such alliances can last for generations. Elves have a curious attachment to their surroundings, perhaps as a result of their incredibly long lifespans or some deeper, more mystical reason. Elves who dwell in a region for long find themselves physically adapting to match their surroundings, most noticeably taking on coloration reflecting the local environment. Those elves that spend their lives among the short-lived races, on the other hand, often develop a skewed Perception of mortality and become morose, the result of watching wave after wave of companions age and die before their eyes.</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="ancestry" id="halflingBtn" value="halfling" />
                                    Halfling
                                </label>
                            </td>
                            <td>Optimistic and cheerful by nature, blessed with uncanny luck and driven by a powerful wanderlust, halflings make up for their short stature with an abundance of bravado and curiosity. At once excitable and easy-going, halflings like to keep an even temper and a steady eye on opportunity, and are not as prone as some of the more volatile races to violent or emotional outbursts. Even in the jaws of catastrophe, a Halfling almost never loses his sense of humor.

                                Halflings are inveterate opportunists. Unable to physically defend themselves from the rigors of the world, they know when to bend with the wind and when to hide away. Yet a halfling's curiosity often overwhelms his good sense, leading to poor decisions and narrow escapes. </td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="ancestry" id="humanBtn" value="human" />
                                    Human
                                </label>
                            </td>
                            <th>Humans possess exceptional drive and a great capacity to endure and expand, and as such are currently the dominant race in the world. Their empires and nations are vast, sprawling things, and the citizens of these societies carve names for themselves with the Strength of their sword arms and the power of their spells. Humanity is best characterized by its tumultuousness and diversity, and human cultures run the gamut from savage but honorable tribes to decadent, devil-worshiping noble families in the most cosmopolitan cities. Human curiosity and ambition often triumph over their predilection for a sedentary lifestyle, and many leave their homes to explore the innumerable forgotten corners of the world or lead mighty armies to conquer their neighbors, simply because they can.</th>
                            <th>Mechanics</th>
                        </tr>
                    </tbody>
                </table>

                <div className="row">
                    <div className="col-sm-6">
                        <Link to="/background">
                            <button>Confirm</button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Ancestry