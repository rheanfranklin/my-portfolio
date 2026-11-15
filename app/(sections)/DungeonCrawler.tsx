import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import "./DungeonCrawler.css";
import Gallery from "../components/Gallery";
import GalleryGrid from "../components/GalleryGrid";

const Monsters: string[] = [
    "images/projects/dungeon-crawler/Monsters/BabySpiderStatic.png",
    "images/projects/dungeon-crawler/Monsters/Bee.png",
    "images/projects/dungeon-crawler/Monsters/BigSpider.png",
    "images/projects/dungeon-crawler/Monsters/Char1Image2.png",
    "images/projects/dungeon-crawler/Monsters/Fish.png",
    "images/projects/dungeon-crawler/Monsters/GhostStatic.png",
    "images/projects/dungeon-crawler/Monsters/JustinBeiber.png",
    "images/projects/dungeon-crawler/Monsters/OgreStatic.png",
    "images/projects/dungeon-crawler/Monsters/Simp.png",
    "images/projects/dungeon-crawler/Monsters/SuccubusStatic.png",
    "images/projects/dungeon-crawler/Monsters/Wizard.png",
    "images/projects/dungeon-crawler/Monsters/WolfMonster.png",
]

const Weapons: string[] = [
    "images/projects/dungeon-crawler/Items/Weapons/SpellBlue.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponAxe3.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponAxe4.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponAxe5.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponAxe6.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponSword3.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponSword4.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponSword5.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponSword6.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponSword7.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponSword8.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponSword9.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponSword10.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponSword11.png",
    "images/projects/dungeon-crawler/Items/Weapons/WeaponSword12.png",
]

const Consumables: string[] = [
    "images/projects/dungeon-crawler/Items/Consumable/PotionRed.png",
    "images/projects/dungeon-crawler/Items/Consumable/PotionBlue.png",
    "images/projects/dungeon-crawler/Items/Consumable/PotionGalaxy.png",
    "images/projects/dungeon-crawler/Items/Consumable/SoupTomato.png",
    "images/projects/dungeon-crawler/Items/Consumable/ChickenNuggets.png",
    "images/projects/dungeon-crawler/Items/Consumable/Cookie.png",
    "images/projects/dungeon-crawler/Items/Consumable/Carrot.png",
    "images/projects/dungeon-crawler/Items/Consumable/Apple.png",
    "images/projects/dungeon-crawler/Items/Consumable/Cake.png",

]

export default function DungeonCrawler(): React.ReactNode {
    return (
        <div className="container-box dungeon-crawler">
            <AnimatedSection variants={fadeUp}>
                <h1>Dungeon Crawler</h1>
                <p className="section-description"> A gallery of the assets I drew for the dungeon crawler game I developed.</p>
            </AnimatedSection>
            
            <AnimatedSection variants={fadeUp}>
                <h2>Monster + Character assets</h2>
                <GalleryGrid
                    images={Monsters}
                />
            </AnimatedSection>

            { /* Padding */ }
            <div className="p-5" />

            <hr/>
            <AnimatedSection variants={fadeUp}>
                <h2>Weapon assets</h2>
                <GalleryGrid
                    images={Weapons}
                />
            </AnimatedSection>

            <hr/>
            <AnimatedSection variants={fadeUp}>
                <h2>Consumables assets</h2>
                <GalleryGrid
                    images={Consumables}
                />
            </AnimatedSection>
            <div className="footer-padding"/>
        </div>
    );
}