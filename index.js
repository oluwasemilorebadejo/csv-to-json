const csv = require("csvtojson");
const fs = require("fs");
const fsp = fs.promises;
const { stringify } = require("csv-stringify");
const { createHash } = require("crypto");

const fileName = "NFT Naming csv - Team Grit";

if (!fileName) {
  console.error("Please specify file path");
  return;
}

const hash = [];

const writableStream = fs.createWriteStream(`./${fileName}.final.csv`);

const convert = async () => {
  const jsonArray = await csv().fromFile(`${fileName}.csv`);
  return jsonArray;
};

const converter = async () => {
  const data = await convert();
  data.forEach(async (el) => {
    let json = {
      format: "CHIP-0007",
      $id: el.UUID,
      name: el.fileName,
      description: el.Description,
      minting_tool: fileName,
      sensitive_content: false,
      series_number: Number(el["Series Number"]),
      series_total: 526,
      attributes: [
        {
          trait_type: "Gender",
          value: el.Gender,
        },
      ],
      collection: {
        name: "Zuri NFT Tickets for Free Lunch",
        id: "b774f676-c1d5-422e-beed-00ef5510c64d",
        attributes: [
          {
            type: "description",
            value: "Rewards for accomplishments during HNGi9.",
          },
        ],
      },
    };
    await fsp.writeFile(`./${json.name}.json`, JSON.stringify(json));
    let readFile = await fsp.readFile(`./${json.name}.json`);

    const hashed = createHash("sha256").update(readFile).digest("hex");
    hash.push(hashed);
  });
  writeToCSV();
  function writeToCSV() {
    const columns = [
      "Series Number",
      "fileName",
      "Description",
      "Gender",
      "UUID",
      "Hash",
    ];

    const csv_writer = stringify({ header: true, columns: columns });

    for (let i = 0; i < data.length; i++) {
      data[i][data[i].length - 1] = hash[i];

      csv_writer.write(data[i]);
    }

    csv_writer.pipe(writableStream);

    console.log("DONE!");
  }
};

converter();
