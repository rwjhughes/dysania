import Head from 'next/head';
import styles from "@/styles/page.module.css";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Head>
        <title>{('Dysania')}</title>
        <meta name="Dysania" content="Index" />
      </Head>
      <div className={styles.container}>

        <div className={styles.header}>
          <img className={styles.title} src="/media/title.png" />
          <hr />
          <div className={styles.contact}>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/dysaniaceol/" target="_blank"><img src="/media/socials/instagram.png" /></a>
              <a href="https://www.youtube.com/@dysaniaceol3444" target="_blank"><img src="/media/socials/youtube.png" /></a>
              <a href="https://www.facebook.com/DysaniaG/" target="_blank"><img src="/media/socials/facebook.png" /></a>
              <a href="https://dysania1.bandcamp.com/music" target="_blank"><img src="/media/socials/bandcamp.png" /></a>
            </div>
            <div><p><a href="mailto:dysania.g@gmail.com">📧 dysania.g@gmail.com</a></p></div>
          </div>
        </div>



        <div className={styles.item}>
          <div className={styles.column}>
            <img className={styles.albumTitle} src='/media/album_title.png' />
            <h4>Albam á sheoladh amárach</h4>
            <iframe width="315" height="560"
              src="https://www.youtube.com/embed/b3wArdhJNBk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>


            {/* <img className={styles.albumCover} src="/media/cover.png" /> */}
            <h4>Éist leis an singil <i>Spéirling</i> anseo</h4>
            <iframe className={styles.speirling} src="https://www.youtube.com/embed/JoL1VVkgMOk?si=fM6h0tMKs3ioQu3f" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            <iframe className={styles.odesli} src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Fi%2F1779408501&theme=dark" frameBorder="0" sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
            <br />
            <iframe className={styles.odesliVideo} src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Fi%2F1814204296&theme=dark" frameBorder="0" sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
          </div>
        </div>

        <div className={styles.item}>
          <h2>Fúinn</h2>
          <div className={styles.content}>
            <h4>Is muidne Dysania, banna a chruthaíonn ceol “Bog Rock” do na Gaeil a bhfuil scaptha ar fud fad na cruinne. 'Séard atá i gceist le "Bog Rock" ná meascán de dhá chultúr, ag gaibhniú uirlisí traidisiúnta is an teanga gaelach le ceol idirnaisiúnta chun ár stíl féin a chothú. Is é príomh-aidhm an ghrúpa ná an teanga a chur chun cinn.</h4>
          </div>

        </div>

        <div className={styles.item}>
          <h2>Físeáin</h2>
          <div className={styles.content}>
            <iframe className={styles.youtube} src="https://www.youtube.com/embed/w_uOD_Gvcro?si=d_ZC52haI-Ewklzb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <iframe className={styles.youtube} src="https://www.youtube.com/embed/heBXNHQ1egA?si=Q7necy-uJiuUvZVn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>

        <div className={styles.footer}>
          <p>© Dysania {currentYear} — arna fhorbairt ag <a href="https://risteard.ie" target='_blank'>Risteárd Ó hAodha</a></p>
        </div>
      </div>

    </div >
  );
}