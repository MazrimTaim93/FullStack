import MainLayout from "../layouts/MainLayout"
function Home() {
    return (
        <MainLayout title="Home" >
            <div className="container-fluid vh-100 mt-4">
                <h1>Character Creator</h1>
                <p className="mt-4">
                    This website will allow you to create, customize, track, and level up any number of characters for my homemade RPG ruleset. <br/>
                    The characters page will contain your previously created characters and allow you to build new ones. <br/> When you choose to 
                    create a new character, the app will guide you through each step of the process, giving you detailed information on how 
                    each decision will effect your new character. <br/>
                    Once you have created your character, you can view them at the characters page. There, you can change your current hp, make rolls, and level up. <br />
                    In the future, this app will support logging in to different accounts, so that only the person who created a character can interact with that character sheet.
                </p>
            </div>
        </MainLayout>
    )
}

export default Home