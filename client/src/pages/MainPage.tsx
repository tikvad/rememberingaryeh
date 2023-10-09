import Post from "../components/Post";
import Slider from "../components/Slider";
import Title from "../components/Title"
import PersonalDetails from "../components/personalDetails";
import 'swiper/scss';
import "../styles/mainPage.scss";
import TopBar from "../components/TopBar";

let posts = [
    {
        name: "Rav Yehuda Gilad Rosh Yeshivat Ma’ale Gilboa",
        date: new Date("2023-09-10"),
        text: 'Dear parents and dear friends,\nWhile I was dancing with a Sefer Torah in my hands on the morning of Simchat Torah, the head of Kibbutz Lavi’s security team approached me. He placed his hand on my shoulder and while moving in sync with me he whispered, "Rav Yehuda, keep dancing, but listen closely because I need your advice. About two hours ago a war broke out in the south. Dozens of terrorists have infiltrated and taken control of a number of settlements. Hundreds of rockets are falling on the Gaza envelope area and as far as Tel Aviv and Jerusalem. The Home Front Command has instructed us to maintain our routine but to be prepared for the possibility of a second front opening up in our area. Should we stop the hakafot and inform everyone of the situation, or is it unnecessary for the time being?"\n I fell silent in complete shock even though we still didn’t know the full magnitude of what had happened. I asked him if the leadership of the kibbutz and the local emergency team were aware of the situation. He confirmed that they knew; we decided together to continue with the festivities as usual.\n Our feet were dancing but our hearts were crying. I looked around at the spirited dancers, young and old, who were rejoicing in the celebration of Simchat Torah without knowing that our country was experiencing one of its darkest hours. A short time later many of them were in uniform on their way to the front lines.\nWhen they began calling up soldiers and reservists, and when terrifying rumors started circulating (which we thought must be exaggerated), we officially announced the situation to the community. I instructed all soldiers and individuals who might be called up by the army to turn on their cell phones to check if they were being called to report to their units.\nAt this moment, Israel is facing one of its most difficult hours. Since the founding of the state, we have not experienced a situation where our enemies have taken over Israeli settlements, slaughtering civilians, and taking soldiers, women and children as captives. Watching the horrifying videos circulating on social media, one is appalled by the cruelty of enemies who show no mercy to the elderly, women, or children.\n This reality of dozens of captives in the hands of Hamas terrorists presents us with a challenge we have never faced before. The moral and humanitarian dilemmas it poses to the Israeli leadership are among the most difficult that one can imagine. We pray that God grants them wisdom and guidance.\nWe trust with all our hearts in the Rock of Israel in both senses of the term – in the God of Israel, and in the indomitable character of the Jewish people which is manifesting itself in these difficult times. All the divisions and rifts that were tearing Israeli society apart just a few days ago are no longer relevant. The people of Israel stand united and strong against a vicious enemy that doesn\'t distinguish between right and left, or secular and religious. We believe that with God\'s help we will overcome this enemy even though the price may be terrible and painful. We will pass through these straits into calmer seas.\nWith aching hearts, we received the news a short time ago that Captain Aryeh Ziering who studied at our yeshiva and volunteered for one of the elite units of the IDF had fallen in battle. His mother Debbie, who worked at the yeshiva a few years ago in public relations, is a dear friend of ours.\nOur students are currently at homes for until the first of the Hebrew month Marcheshvan. We offered our overseas students the option to return to the yeshiva immediately, but most of them chose to remain with their relatives in various parts of the country. On Ma\'ale Gilboa the situation is relatively calm although tense due to recent events. The army has strengthened its presence in the area and we are following the instructions of the local security team.\nMany of our students are now in the combat zones around Gaza and we are praying for their safety and the welfare of all of the precious IDF soldiers. Please pray with us for the well-being of our soldiers and the security of our vulnerable beloved country.\nWe remain steadfast in our faith “that the Lord will not forsake His people; He will not abandon His inheritance.',
        image: "https://ci5.googleusercontent.com/proxy/ZEBAPZGN-whOhWKvA5RgBRGTRez8EbDeYhL4wFMW_nD3vWMmZ6GBR2KB3rdgBYn2bZp-DOg73wHJGGF4MSPPkEFPJyRJUG4DYiBJzS-W3vXf5spB8S-TekYKlREKKbizhg25Db6x=s0-d-e1-ft#https://cdn-media.web-view.net/i/zdezaxdpwdus/____________0.png?cache=1696835745512"

    }
]
export function MainPage() {
    return <div>
        <TopBar button={true} />
        <PersonalDetails/>
        <Slider />
        <div className="postsContainer">
            <Title text="חברים ומשפחה משתפים" />
            {posts.map(({ name, date, text, image }, i) => <Post key={i} name={name} date={date} text={text} image={image} />)}
        </div>
    </div>
}