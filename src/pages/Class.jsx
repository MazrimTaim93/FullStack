import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";

const Class = () => {
    return (
        <MainLayout title="New Character">
            <div className="container-fluid vh-100 mt-4">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-1">
                                <label>
                                    <input type="radio" name="class" id="clericBtn" value="cleric" />
                                    Cleric
                                </label>
                            </td>
                            <td className="col-8">In faith and the miracles of the divine, many find a greater purpose. Called to serve powers beyond most mortal understanding, all priests preach wonders and provide for the spiritual needs of their people. Clerics are more than mere priests, though; these emissaries of the divine work the will of their deities through Strength of arms and the magic of their gods. Devoted to the tenets of the religions and philosophies that inspire them, these ecclesiastics quest to spread the Knowledge and influence of their faith. Yet while they might share similar abilities, clerics prove as different from one another as the divinities they serve, with some offering Healing and redemption, others judging law and truth, and still others spreading conflict and corruption. The ways of the cleric are varied, yet all who tread these paths walk with the mightiest of allies and bear the arms of the gods themselves.</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="class" id="fighterBtn" value="fighter" />
                                    Fighter
                                </label>
                            </td>
                            <td>Some take up arms for glory, wealth, or revenge. Others do battle to prove themselves, to protect others, or because they know nothing else. Still others learn the ways of weaponcraft to hone their bodies in battle and prove their mettle in the forge of war. Lords of the battlefield, fighters are a disparate lot, training with many weapons or just one, perfecting the uses of armor, learning the fighting techniques of exotic masters, and studying the art of combat, all to shape themselves into living weapons. Far more than mere thugs, these skilled warriors reveal the true deadliness of their weapons, turning hunks of metal into arms capable of taming kingdoms, slaughtering monsters, and rousing the hearts of armies. Soldiers, knights, hunters, and artists of war, fighters are unparalleled champions, and woe to those who dare stand against them.</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="class" id="rogueBtn" value="rogue" />
                                    Rogue
                                </label>
                            </td>
                            <td>Life is an endless adventure for those who live by their wits. Ever just one step ahead of danger, rogues bank on their cunning, skill, and charm to bend fate to their favor. Never knowing what to expect, they prepare for everything, becoming masters of a wide variety of skills, training themselves to be adept manipulators, agile acrobats, shadowy stalkers, or masters of any of dozens of other professions or talents. Thieves and gamblers, fast talkers and diplomats, bandits and bounty hunters, and explorers and investigators all might be considered rogues, as well as countless other professions that rely upon wits, prowess, or luck. Although many rogues favor cities and the innumerable opportunities of civilization, some embrace lives on the road, journeying far, meeting exotic people, and facing fantastic danger in pursuit of equally fantastic riches. In the end, any who desire to shape their fates and live life on their own terms might come to be called rogues.</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td >
                                <label>
                                    <input type="radio" name="class" id="wizardBtn" value="wizard" />
                                    Wizard
                                </label>
                            </td>
                            <td>Beyond the veil of the mundane hide the secrets of absolute power. The works of beings beyond mortals, the legends of realms where gods and spirits tread, the lore of creations both wondrous and terrible—such mysteries call to those with the ambition and the intellect to rise above the common folk to grasp true might. Such is the path of the wizard. These shrewd magic-users seek, collect, and covet esoteric knowledge, drawing on cultic arts to work wonders beyond the abilities of mere mortals. While some might choose a particular field of magical study and become masters of such powers, others embrace versatility, reveling in the unbounded wonders of all magic. In either case, wizards prove a cunning and potent lot, capable of smiting their foes, empowering their allies, and shaping the world to their every desire.</td>
                            <td>Mechanics</td>
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <Link to="/ancestry">
                        <button>Confirm</button>
                    </Link>
                </div>
            </div>
        </MainLayout>
    )
}

export default Class