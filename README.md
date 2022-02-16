[English version / sivu englanniksi](#my-new-tab-page)

# Oma uusi välilehti

Selainlisäosa Chromium-pohjaisiin selaimiin. Lisäosa korvaa uuden välilehden haluamallasi osoitteella. Tämä on tehty lähinnä kokeiluna ja omia tarpeita varten.

Koodi ei sisällä ylimääräistä tauhkaa, eikä ota yheyttä mihinkään, saati sitten utele tietojasi. Liekö tekee uuden välilehden korvaamistakaan nopeiten, mutta toimii. Koodi ei montaa riviä ole. Lisäosan manifest-tiedosto on version 3 mukainen.

![Kuvakaappaus](/extra-stuff/Store_Pic_640x400-fi.png)

## Asennus ja varoitukset

Asenna lisäosa Microsoft Edgen lisäosakaupasta tai Chromen Web Storesta. Voit asentaa sen myös manuaalisesti pakkaamattomana lisäosana.

<table>
<tr>
<td><a href="https://microsoftedge.microsoft.com/addons/detail/koeekebjmifffhmjaoholoapkbnbheii"><img valign="middle" src="./extra-stuff/svg-edge.svg" width="32" height="32" alt=""> Microsoft Edge -lisäosat</a></td>
<td><a href="https://chrome.google.com/webstore/detail/cgodnmeogfkkmmolmcijbhnnhlhlliod"><img valign="middle" src="./extra-stuff/svg-chrome.svg" width="32" height="32" alt=""> Chrome Web Store</a></td>
</tr>
</table>

Selaimet varoittavat tästä lisäosasta asennusvaiheessa, koska tämä haluaa korvata selaimen oman sisäisen `newtab` osoitteen uudella. Noudata varoituksen ohjeita ja ota tämä lisäosa käyttöön manuaalisesti asennuksen jälkeen, jos haluat lisäosan toimivan.

## Tarvittavat oikeudet

Tarvittavat oikeudet pyydetään [manifest.json](extension/manifest.json) tiedostossa.

* Vaihda sivu, jonka näet, kun avaat uuden välilehden
    * Tämä on lisäosan tarkoitus.
* Storage / tallennus
    * Tätä ei välttämättä lisäosan tiedoissa selaimessasi näy. Oikeus tarvitaan siksi, että lisäosan täytyy tallentaa määrittelemäsi uuden välilehden osoite.
    * "Storage/tallennus" tarkoittaa tässä yhteydessä selaimen sisäistä tallennusta. Lisäosalla ei ole pääsyä tiedostoihisi.

<br>

---

<br>

# My new tab page

Browser extension for Chromium based browsers. This extension will replace the new tab page with the user defined address. This was made mainly as an experiment and for personal use.

The code does not contain any extra fluff, and does not connect to anywhere, let alone collect any personal information. It probably doesn't use the fastest way to replace new tab page, but it works. There are only few lines of code. The manifest file for the extension is version 3.

![Screenshot](/extra-stuff/Store_Pic_640x400-en.png)

## Installation and warnings

Install this extension from Microsoft Edge Add-ons website or Chrome Web Store. You can also install it manually as an unpacked extension.

<table>
<tr>
<td><a href="https://microsoftedge.microsoft.com/addons/detail/koeekebjmifffhmjaoholoapkbnbheii"><img valign="middle" src="./extra-stuff/svg-edge.svg" width="32" height="32" alt=""> Microsoft Edge Add-ons</a></td>
<td><a href="https://chrome.google.com/webstore/detail/cgodnmeogfkkmmolmcijbhnnhlhlliod"><img valign="middle" src="./extra-stuff/svg-chrome.svg" width="32" height="32" alt=""> Chrome Web Store</a></td>
</tr>
</table>

Browsers will warn you about this extension during the installation phase, as this will replace the browser's own internal `newtab` address with a new one. Follow the instructions in the warning and enable this extension manually after installation if you want the extension to work.

## Necessary permissions

Required permissions are requested in the [manifest.json](extension/manifest.json) file.

* Change the page you see when you open a new tab
    * This is the main purpose of the extension.
* Storage
    * This may not appear in the extension details in your browser. This permission is required because the extension must save somewhere the new tab page address you define.
    * Storage in this context means browser's internal storage. The extension does not have access to your files.
