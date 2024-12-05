export async function GET(request: Request, response: Response) {
  return Response.json({
    data: [
      {
        name: "step-1",
        inputs: [
          {
            type: "text",
            name: "name",
            defaultValue: "",
            placeholder: "Name",
            validation: {
              required: true,
              minLength: 3,
              maxLength: 20,
              message: "Name is required",
              messageMin: "Name must be between 3 and 20 characters",
              messageMax: "Name must be between 3 and 20 characters",
              messagePattern: "Name must contain only letters",
            },
          },
          {
            type: "email",
            name: "email",
            defaultValue: "",
            placeholder: "Email",
            validation: {
              required: true,
              message: "Email is required",
              messagePattern: "Email must be a valid email",
            },
          },
          {
            type: "password",
            name: "password",
            defaultValue: "",
            placeholder: "Password",
            validation: {
              required: true,
              minLength: 6,
              maxLength: 20,
              message: "Password is required",
              messageMin: "Password must be between 6 and 20 characters",
              messageMax: "Password must be between 6 and 20 characters",
              messagePattern:
                "Password must contain at least one uppercase letter, one lowercase letter and one number",
            },
          },
        ],
      },
      //address step
      {
        name: "step-2",
        inputs: [
          {
            type: "text",
            name: "street",
            defaultValue: "",
            placeholder: "Street",
            validation: {
              required: true,
              minLength: 3,
              maxLength: 20,
              message: "Street is required",
              messageMin: "Street must be between 3 and 20 characters",
              messageMax: "Street must be between 3 and 20 characters",
              messagePattern:
                "Street must contain only letters, numbers and spaces",
            },
          },
          {
            type: "text",
            name: "city",
            defaultValue: "",
            placeholder: "City",
            validation: {
              required: true,
              minLength: 3,
              maxLength: 20,
              message: "City is required",
              messageMin: "City must be between 3 and 20 characters",
              messageMax: "City must be between 3 and 20 characters",
              messagePattern: "City must contain only letters and spaces",
            },
          },
          {
            type: "text",
            name: "zip",
            defaultValue: "",
            placeholder: "Zip",
            validation: {
              required: true,
              message: "Zip is required",
              messagePattern: "Zip must be a 5 digit number",
            },
          },
        ],
      },
      {
        name: "step-3",
        inputs: [
          {
            name: "Programming Languages",
            type: "radio",
            radios: [
              {
                label: "Java",
                value: "java",
              },
              {
                label: "Python",
                value: "python",
              },
              {
                label: "JavaScript",
                value: "javascript",
              },
              {
                label: "C++",
                value: "c++",
              },
            ],
            validation: {
              required: true,
              message: "Programming Language is required",
            },
            defaultValue: "",
          },
        ],
      },
      {
        name: "step-4",
        inputs: [
          {
            type: "text",
            name: "pretentions",
            defaultValue: "",
            placeholder: "Pretentions salariales",
            validation: {
              required: true,
              message: "Pretentions salariales is required",
              messagePattern: "Pretentions salariales must be a number",
            },
          },
          {
            type: "text",
            name: "experience",
            defaultValue: "",
            placeholder: "Experience",
            validation: {
              required: true,
              message: "Experience is required",
              messagePattern: "Experience must be a number",
            },
          },
        ],
      },
      {
        name: "step-5",
        inputs: [
          {
            type: "checkbox",
            name: "supp",
            label: "supp",
            defaultValue: false,
            hasDependantsFields: true,
            dependantsFields: [
              {
                type: "checkbox",
                name: "infos",
                id: "infos-1",
                defaultValue: "",
                placeholder: "Infos",
                validation: {
                  required: true,
                  message: "Infos is required",
                },
                hasDependantsFields: true,
                dependantsFields: [
                  {
                    type: "text",
                    name: "dnfjdfjig",
                    id: "infos-1",
                    defaultValue: "",
                    placeholder: "Infos",
                    validation: {
                      required: true,
                      message: "Infos is required",
                    },
                  },
                  {
                    type: "text",
                    name: "fhdof unso ddfih",
                    id: "infos-1",
                    defaultValue: "",
                    placeholder: "Infos",
                    validation: {
                      required: true,
                      message: "Infos is required",
                    },
                  },
                ],
              },
              {
                type: "text",
                name: "infos2",
                id: "infos-2",
                defaultValue: "",
                placeholder: "Infos2",
                validation: {
                  required: true,
                  message: "Infos2 is required",
                },
              },
              {
                type: "text",
                name: "infos3",
                id: "infos-3",
                defaultValue: "",
                placeholder: "Infos3",
                validation: {
                  required: true,
                  message: "Infos3 is required",
                },
              },
            ],
          },
        ],
      },
    ],
  });
}
