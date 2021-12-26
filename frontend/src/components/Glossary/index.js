import React from 'react';
import i18n from '../../i18n/index'
import { MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './Glossary.css'



function Glossary() {
    const [datatable, setDatatable] = React.useState({
        columns: [
          {
            label: 'Guarani',
            field: 'guarani',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Spanish',
            field: 'spanish',
            width: 270,
          },
          {
            label: 'English',
            field: 'english',
            width: 200,
          }
        ],
        rows: [
                    {
                        guarani: "Aguyje",
                        spanish: "Gracias.",
                        english: "Thanks."
                    },
                    {
                        guarani: "Akã ",
                        spanish: "Cabeza",
                        english: "Head"
                    },
                    {
                        guarani: "Andai ",
                        spanish: "Zapallo",
                        english: "Pumpkin."
                    },
                    {
                        guarani: "Anga ",
                        spanish: "Alma",
                        english: "Soul"
                    },
                    {
                        guarani: "Angirũ",
                        spanish: "Amigo",
                        english: "Friend"
                    },
                    {
                        guarani: "Apysa ",
                        spanish: "Oído",
                        english: "Ear"
                    },
                    {
                        guarani: "Arandu",
                        spanish: "Inteligente, listo/a",
                        english: "Smart, clever, intelligent"
                    },
                    {
                        guarani: "Arro ",
                        spanish: "Arroz",
                        english: "Rice"
                    },
                    {
                        guarani: "Avati ",
                        spanish: "Maíz",
                        english: "Corn "
                    },
                    {
                        guarani: "Che",
                        spanish: "Yo",
                        english: "I"
                    },
                    {
                        guarani: "Cheréra ",
                        spanish: "Mi nombre",
                        english: "My name"
                    },
                    {
                        guarani: "Chipa ",
                        spanish: "Comida típica paraguaya hecho a base de almidón y queso.",
                        english: "A traditional Paraguayan dish made of corn flour, starch, milk and cheese cooked in the oven."
                    },
                    {
                        guarani: "Chipaguasu ",
                        spanish: "Comida típica paraguaya, hecho en base a maíz choclo y queso",
                        english: "A traditional Paraguayan dish made of sweet corn, milk and cheese"
                    },
                    {
                        guarani: "Gua",
                        spanish: "De",
                        english: "From"
                    },
                    {
                        guarani: "Guereko",
                        spanish: "Tener ",
                        english: "To have"
                    },
                    {
                        guarani: "Ha’e ",
                        spanish: "Él.",
                        english: "He"
                    },
                    {
                        guarani: "Ha’ekuéra  ",
                        spanish: "Ellos",
                        english: "They"
                    },
                    {
                        guarani: "Heẽ ",
                        spanish: "Si ",
                        english: "Yes/Yeah"
                    },
                    {
                        guarani: "Hi’áva ",
                        spanish: "Su cabello",
                        english: "His/her hair"
                    },
                    {
                        guarani: "Hovy",
                        spanish: "Azul",
                        english: "Blue"
                    },
                    {
                        guarani: "Hovyũ ",
                        spanish: "Verde",
                        english: "Green"
                    },
                    {
                        guarani: "Hũ  ",
                        spanish: "Negro",
                        english: "Black"
                    },
                    {
                        guarani: "Humby",
                        spanish: "Su cintura",
                        english: "His/Her waist"
                    },
                    {
                        guarani: "Hũngy ",
                        spanish: "Gris",
                        english: "Gray"
                    },
                    {
                        guarani: "Hymbajagua",
                        spanish: "Su perro",
                        english: "His/her dog"
                    },
                    {
                        guarani: "Iporã ",
                        spanish: "Bien ",
                        english: "Fine, good"
                    },
                    {
                        guarani: "Iporãiterei",
                        spanish: "Excelente",
                        english: "Excellent"
                    },
                    {
                        guarani: "Iporãmínte ",
                        spanish: "Bien ",
                        english: "Good"
                    },
                    {
                        guarani: "Iporãnte ",
                        spanish: "Muy bien",
                        english: "Very Well"
                    },
                    {
                        guarani: "Irundy",
                        spanish: "Cuatro  ",
                        english: "Four"
                    },
                    {
                        guarani: "Jagua",
                        spanish: "Perro",
                        english: "Dog"
                    },
                    {
                        guarani: "Japo ",
                        spanish: "Hacer",
                        english: "To do"
                    },
                    {
                        guarani: "Jogua ",
                        spanish: "Comprar",
                        english: "To buy"
                    },
                    {
                        guarani: "Joyke’ykuéra ",
                        spanish: "Hermanos",
                        english: "Brothers"
                    },
                    {
                        guarani: "Ka’aru ",
                        spanish: "De tarde",
                        english: "Afternoon"
                    },
                    {
                        guarani: "Kaay",
                        spanish: "Mate",
                        english: "A traditional Paraguayan drink made of Yerba Mate and hot water"
                    },
                    {
                        guarani: "kaay’u ",
                        spanish: "Tomar mate",
                        english: "To drink mate"
                    },
                    {
                        guarani: "kamby",
                        spanish: "Leche",
                        english: "Milk"
                    },
                    {
                        guarani: "Kamby arro",
                        spanish: "Arroz con leche",
                        english: "A type of dessert made of sugar, milk, and rice"
                    },
                    {
                        guarani: "Kape",
                        spanish: "Cuate",
                        english: "Pal/Buddy"
                    },
                    {
                        guarani: "Karai",
                        spanish: "Señor",
                        english: "Karai"
                    },
                    {
                        guarani: "Karu",
                        spanish: "Comer",
                        english: "To eat"
                    },
                    {
                        guarani: "Karumbe",
                        spanish: "Tortga  ",
                        english: "Turtle"
                    },
                    {
                        guarani: "Kavara",
                        spanish: "Cabra",
                        english: "Goat"
                    },
                    {
                        guarani: "Kavara’i ",
                        spanish: "Cabrito ",
                        english: "Little Goat."
                    },
                    {
                        guarani: "Ko’ẽ ",
                        spanish: "Amanecer ",
                        english: "Dawn."
                    },
                    {
                        guarani: "Kojói",
                        spanish: "Cocido: yerba mate cocido con agua",
                        english: "A traditional Paraguayan tea made of Yerba Mate, sugar and hot water"
                    },
                    {
                        guarani: "Kuñakarai ",
                        spanish: "Señora",
                        english: "Lady"
                    },
                    {
                        guarani: "Kure",
                        spanish: "Cerdo",
                        english: "Pig"
                    },
                    {
                        guarani: "Kure’i ",
                        spanish: "Cerdito",
                        english: "Piggy"
                    },
                    {
                        guarani: "Ky’a",
                        spanish: "Sucio/a",
                        english: "Dirty"
                    },
                    {
                        guarani: "Kypy’y",
                        spanish: "Hermana menor de la mujer",
                        english: "A woman’s younger sister"
                    },
                    {
                        guarani: "Kyvy",
                        spanish: "Hermano de la mujer",
                        english: "A woman’s brother"
                    },
                    {
                        guarani: "Maitei",
                        spanish: "Hola ",
                        english: "Hi/ Hello"
                    },
                    {
                        guarani: "Mandi’o ",
                        spanish: "Mandioca",
                        english: "Manioc"
                    },
                    {
                        guarani: "Marangatu ",
                        spanish: "Noble ",
                        english: "Noble"
                    },
                    {
                        guarani: "Mba’éichapa",
                        spanish: "¿Cómo estás?  ",
                        english: "How is everything? / How are you?"
                    },
                    {
                        guarani: "Mba’éichapa ndeka’aru. ",
                        spanish: "Buenos tardes",
                        english: "Good Afternoon Afternoon"
                    },
                    {
                        guarani: "Mba’éichapa ndepyhare.",
                        spanish: "Buenas noches. ",
                        english: "Good evening"
                    },
                    {
                        guarani: "Mba’éichapa neko’ ẽ",
                        spanish: "Buenos días",
                        english: "Good Morning"
                    },
                    {
                        guarani: "Mba’eteko",
                        spanish: "¿Cómo estás?  ",
                        english: "How is everything?/ - How are you?"
                    },
                    {
                        guarani: "Mbarakaja ",
                        spanish: "Gato",
                        english: "Cat"
                    },
                    {
                        guarani: "Mbeju ",
                        spanish: "Comida típica paraguaya hecha de almidon, harina de maíz, huevos y queso",
                        english: "A traditional Paraguayan dish made of corn flour, starch, milk and cheese cooked in a skillet"
                    },
                    {
                        guarani: "Mbohapy ",
                        spanish: "Tres",
                        english: "Three"
                    },
                    {
                        guarani: "Mbyja ",
                        spanish: "Estrella",
                        english: "Star"
                    },
                    {
                        guarani: "Merõ ",
                        spanish: "Melón",
                        english: "Melon "
                    },
                    {
                        guarani: "Mitãkuimba’e",
                        spanish: "Niño",
                        english: "Boy"
                    },
                    {
                        guarani: "Mitãkuña ",
                        spanish: "Niña",
                        english: "Girl"
                    },
                    {
                        guarani: "Mokõi ",
                        spanish: "Dos",
                        english: "Two"
                    },
                    {
                        guarani: "Moõ.",
                        spanish: "¿Dónde?",
                        english: "Where?"
                    },
                    {
                        guarani: "Mopotĩ",
                        spanish: "Limpiar",
                        english: "To clean"
                    },
                    {
                        guarani: "Nahániri ",
                        spanish: "No",
                        english: "Not"
                    },
                    {
                        guarani: "Nde ",
                        spanish: "Tú",
                        english: "You"
                    },
                    {
                        guarani: "Ndépiko ",
                        spanish: "¿Eres tú..?",
                        english: "Are you..?"
                    },
                    {
                        guarani: "Nderéra. ",
                        spanish: "Tu nombre",
                        english: "Your name"
                    },
                    {
                        guarani: "Óga ",
                        spanish: "Casa",
                        english: "House"
                    },
                    {
                        guarani: "Pa ",
                        spanish: "Diez",
                        english: "Ten"
                    },
                    {
                        guarani: "Pakova ",
                        spanish: "Banana/Plátano",
                        english: "Banana"
                    },
                    {
                        guarani: "Papyeta  ",
                        spanish: "Plural",
                        english: "Plurar"
                    },
                    {
                        guarani: "Papyteĩ",
                        spanish: "Singular",
                        english: "Singular"
                    },
                    {
                        guarani: "Paraguaja ",
                        spanish: "Paraguaya",
                        english: "Paraguayan"
                    },
                    {
                        guarani: "Perõ",
                        spanish: "Pelado/calvo",
                        english: "Bald"
                    },
                    {
                        guarani: "Peteĩ",
                        spanish: "Uno",
                        english: "One"
                    },
                    {
                        guarani: "Po ",
                        spanish: "Cinco",
                        english: "Five"
                    },
                    {
                        guarani: "Poapy ",
                        spanish: "Ocho",
                        english: "Eight"
                    },
                    {
                        guarani: "Pokõi ",
                        spanish: "Siete",
                        english: "Seven"
                    },
                    {
                        guarani: "Porã ",
                        spanish: "Lindo/a",
                        english: "Handsome (M), beautiful (F)"
                    },
                    {
                        guarani: "Porundy ",
                        spanish: "Nueve",
                        english: "Nine"
                    },
                    {
                        guarani: "Poteĩ",
                        spanish: "Seis",
                        english: "Six"
                    },
                    {
                        guarani: "Purahéi ",
                        spanish: "Cancion, música",
                        english: "Song, muscic"
                    },
                    {
                        guarani: "Py",
                        spanish: "Pie",
                        english: "Foot"
                    },
                    {
                        guarani: "Pyhare ",
                        spanish: "Noche",
                        english: "Evening/ Night."
                    },
                    {
                        guarani: "Pytã ",
                        spanish: "Rojo",
                        english: "Red"
                    },
                    {
                        guarani: "Pytãju ",
                        spanish: "Anaranjado",
                        english: "Orange"
                    },
                    {
                        guarani: "Pytãngy ",
                        spanish: "Rosado",
                        english: "Pink"
                    },
                    {
                        guarani: "Reindy ",
                        spanish: "Hermana del varón                    ",
                        english: "A man’s sister"
                    },
                    {
                        guarani: "Ryguasu ",
                        spanish: "Gallina ",
                        english: "Chicken"
                    },
                    {
                        guarani: "Sa’yju ",
                        spanish: "Amarillo",
                        english: "Yellow"
                    },
                    {
                        guarani: "So’o apu’a",
                        spanish: "Albóndiga",
                        english: "Meatball"
                    },
                    {
                        guarani: "Sy",
                        spanish: "Madre",
                        english: "Mother"
                    },
                    {
                        guarani: "Ta’ãnga ",
                        spanish: "Dibujo",
                        english: "Drawing"
                    },
                    {
                        guarani: "Tapiti ",
                        spanish: "Conejo ",
                        english: "Rabbit."
                    },
                    {
                        guarani: "Tembi’u ",
                        spanish: "Comida, alimento",
                        english: "Food"
                    },
                    {
                        guarani: "Téra",
                        spanish: "Nombre",
                        english: "Name"
                    },
                    {
                        guarani: "Tereg̃uahẽ porãite",
                        spanish: "Bienvenido ",
                        english: "Welcome"
                    },
                    {
                        guarani: "Tereré",
                        spanish: "Una bebida tradicional del Paraguay hecha de yerba mate con agua fría.",
                        english: "A traditional Paraguayan drink served with Yerba Mate and icy water"
                    },
                    {
                        guarani: "Tumby  ",
                        spanish: "Cintura",
                        english: "Waist "
                    },
                    {
                        guarani: "Túva",
                        spanish: "Papá",
                        english: "Father, dad"
                    },
                    {
                        guarani: "Tykéra",
                        spanish: "Hermana mayor de la mujer",
                        english: "A woman’s older sister"
                    },
                    {
                        guarani: "U",
                        spanish: "Comer, tomar  ",
                        english: "To eat"
                    },
                    {
                        guarani: "Upéicha. ",
                        spanish: "Asimismo",
                        english: "That’s right"
                    },
                    {
                        guarani: "Vaka. ",
                        spanish: "Vaca",
                        english: "Cow"
                    },
                    {
                        guarani: "Y ",
                        spanish: "Agua",
                        english: "Water "
                    },
                    {
                        guarani: "Yu",
                        spanish: "Tomar, beber",
                        english: "To drink"
                    },
                    {
                        guarani: "Yva",
                        spanish: "Fruta",
                        english: "Fruit"
                    },
                    {
                        guarani: "Yva rykue",
                        spanish: "Jugo",
                        english: "Fruit juice"
                    },
                    {
                        guarani: "Yvoty ",
                        spanish: "Flor",
                        english: "Flower"
                    },
                    {
                        guarani: "Yvysa’y ",
                        spanish: "Marrón",
                        english: "Brown"
                    }

        ],
      });

	return (
        <div className="" style={{color:'black'}}>
            <h3><strong><em>{i18n.t('glossary')}</em></strong></h3>
            <br />
            <MDBDataTableV5
                hover
                entriesOptions={[20, 30, 50]}
                entries={20}
                pagesAmount={4}
                data={datatable}
                pagingTop
                searchTop
                searchBottom={false}
            />

        </div>
	);
}

export default Glossary;
