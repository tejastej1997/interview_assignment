export const explorer = {
  name: "root",
  isDirectory: true,
  items: [
    {
      name: "public",
      isDirectory: true,
      items: [
        {
          name: "index.html",
          isDirectory: false
        }
      ]
    },
    {
      name: "src",
      isDirectory: true,
      items: [
        {
          name: "data",
          isDirectory: true,
          items: [
            {
              name: "folderData.ts",
              isDirectory: false
            },
            {
              name: "inside-data",
              isDirectory: true,
              items: [
                {
                  name: "temp.ts",
                  isDirectory: false
                },
                {
                  name: "inside-data-1",
                  isDirectory: true,
                  items: [
                    {
                      name: "temp-1.ts",
                      isDirectory: false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "App.tsx",
          isDirectory: false
        },
        {
          name: "index.tsx",
          isDirectory: false
        },
        {
          name: "styles.css",
          isDirectory: false
        }
      ]
    },
    {
      name: "tsConfig.json",
      isDirectory: false
    }
  ]
};
