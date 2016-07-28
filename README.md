# MForm - REDAXO Addon für Modul-Input-Formulare

MForm ist ein REDAXO Addon, welches das Erstellen von Modul-Formularen erheblich erleichtert. Dabei nutzt MForm Templates welche es dem Administrator ermöglichen den Modul-Style seinen Vorstellungen anzupassen. MForm stellt alle wesentlichen Modul-Input-Formular Elemente bereit welche sich recht einfach einbinden lassen.

![Screenshot](https://raw.githubusercontent.com/FriendsOfREDAXO/mform/assets/mform.png)

Eine detailierte Beschreibung wie Modul-Input-Formulare mit beliebigen Elementen versehen werden können lässt sich im [Wiki](https://github.com/FriendsOfREDAXO/mform/wiki) finden.


##### Hinweis

* MForm ist ausschließlich dafür geeignet REDAXO Modul-Input-Formulare zu generieren!


## Installation

1. Letzten [release](https://github.com/FriendsOfREDAXO/mform/releases/latest) downloaden
2. Zip Archiv entpacken
3. Entpackten Folder in `mform` umbenennen
4. MForm Ordner in den REDAXO Addon Ordner `redaxo/src/addons/` verschieben
5. In REDAXO einloggen und Addon installieren und aktivieren

## Alternative Installationen

MForm kann auch direkt über den Redaxo-Installer Installiert werden. [MForm Redaxo Addon Page](http://www.redaxo.org/de/download/addons/?addon_id=967&searchtxt=mform&cat_id=-1)


## Usage

MForm muss im Modul-Input eines REDAXO Moduls als PHP Code notiert werden.


### Instanziierung  

    <?php
        // instantiate
        $MForm = new MForm();

Der MForm Classe kann im Konstruktor der Templatename übergeben werden. Dabei entspricht der Templatename dem Prefix des Templateordners.

    <?php
        // instantiate
        $MForm = new MForm('table');


### Formularelemente

Die wesentlichen Formularelemente die MForm bereitstellt werden durch Methoden hinzugefügt.

    // add headline
    $MForm->addHeadline("Headline");
    
    // add text field
    $MForm->addTextField(1, array('label'=>'Input', 'style'=>'width:200px'));

Alle MForm Methoden erwarten optional Attribute, Parameter und Optionen. Diese können auch durch Setter nachträglich dem Element zugewiesen werden.

    // add text field
    $MForm->addTextField(1);
    $MForm->setLabel('Text Field');
    $MForm->setAttributes(array('style'=>'width:200px', 'class'=>'test-field'));

Der `REX_VALUE-Key` muss jeder Formular-Input-Methode als Pflichtfeld übergeben werden. Informative Elemente benötigen keine ID.


##### Full JSON Value Support

MForm unterstützt `REX_VALUE-ARRAYs` wodurch es praktisch keine `REX_VALUE`-Limitierung mehr gibt. Zu beachten ist, dass jeder x.0 Key als Sting übergeben werden muss.

    // add text field
    $MForm->addTextField("1.0");
    $MForm->addTextField(1.1);
    $MForm->addTextField("1.2.Titel");


### Formular erzeugen

Um das komponierte Formular erzeugen zu lassen muss muss die `show` Methode genutzt werden.

    // create output
    echo $MForm->show();


### MForm-Elemente

MForm stellt folgende Elemente bereit: 

* Text-Input- und Hidden-Elemente
  * `addTextField`
  * `addHiddenField`
  * `addTextAreaField`
  * `addTextReadOnlyField`
  * `addTextAreaReadOnlyField`
* Select-Elemente
  * `addSelectField`
  * `addMultiSelectField`
* Checkbox- und Radio-Elemente
  * `addCheckboxField`
  * `addRadioField`
* Strukturelle-Elemente
  * `addHtml`
  * `addHeadline`
  * `addDescription`
  * `addFieldset`
* System-Button-Elemente
  * `addLinkField`
  * `addLinklistField`
  * `addMediaField`
  * `addMedialistField`


##### Geplante Elemente

* Callback-Element
  * `callback`


## Lizenz

MForm ist unter der [MIT Lizenz](LICENSE.md) lizensiert.
