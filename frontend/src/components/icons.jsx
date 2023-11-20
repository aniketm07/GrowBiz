export const Icons = {
    logo: (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
    ),
    clock: (props) => {
        if (props.isFilled) {
            return (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        fill="#000"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                        fill="white"
                    />
                </svg>
            );
        }
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#000"
                    stroke-width="1.5"
                />
                <path
                    d="M12 8V12L14.5 14.5"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
    badgeCheck: (props) => {
        if (props.isFilled)
            return (
                <svg
                    key={props.isFilled}
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-badge-check"
                    {...props}
                >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" stroke="white" />
                </svg>
            );
        return (
            <svg
                key={props.isFilled}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-badge-check"
                {...props}
            >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        );
    },
    layoutGrid: (props) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill={props.isFilled ? "currentColor" : "none"}
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-layout-grid"
            >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
        );
    },
    twitter: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
        </svg>
    ),
    gitHub: (props) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    radix: (props) => (
        <svg viewBox="0 0 25 25" fill="none" {...props}>
            <path
                d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
                fill="currentcolor"
            ></path>
            <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
            <path
                d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
                fill="currentcolor"
            ></path>
        </svg>
    ),
    aria: (props) => (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
        </svg>
    ),
    npm: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
                fill="currentColor"
            />
        </svg>
    ),
    yarn: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
                fill="currentColor"
            />
        </svg>
    ),
    pnpm: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
                fill="currentColor"
            />
        </svg>
    ),
    react: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                fill="currentColor"
            />
        </svg>
    ),
    tailwind: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                fill="currentColor"
            />
        </svg>
    ),
    google: (props) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
        </svg>
    ),
    apple: (props) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                fill="currentColor"
            />
        </svg>
    ),
    paypal: (props) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                fill="currentColor"
            />
        </svg>
    ),
    spinner: (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    ),
    beauty: (props) => (
        <svg
            fill="currentColor"
            width="42px"
            height="42px"
            viewBox="0 0 50 50"
            version="1.2"
            baseProfile="tiny"
            xmlns="http://www.w3.org/2000/svg"
            overflow="inherit"
            {...props}
        >
            <path d="M34.781 6.664h-6.951c-1.256.004-1.209 1.876 0 1.865h6.951v.957h-6.951c-1.249-.011-1.203 1.86 0 1.865h6.951v.978h-6.951c-1.249 0-1.203 1.87 0 1.865h6.951v.932h-6.951c-1.223.009-1.203 1.881 0 1.887h6.951v.934h-6.951c-1.223-.004-1.228 1.865 0 1.865h6.951v.932h-6.951c-1.223.004-1.228 1.875 0 1.866h6.951v.955h-6.951c-1.223-.011-1.228 1.858 0 1.865h6.951v.93h-6.951c-1.223-.001-1.203 1.872 0 1.866h6.951v18.159c.004 2.767 4.207 2.717 4.219 0v-42.495c-.012-1.264-1.05-2.862-2.758-2.867h-8.412c-1.256.001-1.209 1.873 0 1.865l6.951.023v.93h-6.951c-1.254-.006-1.207 1.865 0 1.866h6.951v.957zm-7.429 32.194c-.004-3.23-3.352-6.704-7.352-4.454v-12.354l-2.587-20.375c-.054-.539-.511-.666-.818-.675-.317.009-.952.136-1.021.675l-2.574 20.375v12.354c-4-2.25-7.24 1.246-7.241 4.429.001 2.832 2.181 5.158 5.131 5.151 2.972.007 5.11-2.6 5.11-5.151v-12.833h1v12.833c0 2.856 2.212 4.97 4.67 5.104-.041 1.566.47 3.8 1.432 4.686 1.128 1.04 2.471-.29 1.92-1.373-.532-1.008-1.054-1.605-.63-3.806 1.772-.82 2.956-2.546 2.96-4.586zm-16.348 2.541c-1.396-.009-2.524-1.141-2.526-2.541.002-1.399 1.13-2.536 2.526-2.544 1.386.008 2.515 1.145 2.525 2.544-.01 1.401-1.139 2.533-2.525 2.541zm8.571-2.541c.009-1.399 1.136-2.536 2.526-2.544 1.392.008 2.521 1.145 2.525 2.544-.004 1.4-1.132 2.532-2.525 2.541-1.39-.008-2.518-1.14-2.526-2.541z" />
        </svg>
    ),
    housing: (props) => (
        <svg
            height="50px"
            width="50px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 74.34 74.34"
            xmlSpace="preserve"
        >
            <path
                style={{ fill: "#231F20" }}
                d="M29.52,53.303h-8.945c-0.552,0-1,0.448-1,1v8.104c0,0.343,0.176,0.662,0.466,0.845l4.473,2.826
   c0.163,0.103,0.349,0.155,0.534,0.155s0.371-0.052,0.534-0.155l4.473-2.826c0.29-0.183,0.466-0.502,0.466-0.845v-8.104
   C30.52,53.751,30.072,53.303,29.52,53.303z M28.52,61.856l-3.473,2.194l-3.473-2.194v-6.553h6.945V61.856z M22.81,28.413
   c0.925,8.32,7.514,12.07,11.993,12.07c4.479,0,11.067-3.75,11.993-12.07c1.333-0.702,3.13-2.447,3.039-5.548
   c-0.018-0.599-0.071-2.419-1.406-2.924c-1.313-0.497-2.638,0.819-2.891,1.088c-0.377,0.404-0.356,1.037,0.047,1.414
   s1.037,0.357,1.414-0.047c0.175-0.187,0.482-0.424,0.686-0.521c0.056,0.151,0.134,0.462,0.151,1.05
   c0.085,2.891-2.028,3.759-2.238,3.838l-3.894,0.853c-4.581-0.493-9.221-0.493-13.801,0l-3.901-0.854
   c-0.295-0.116-2.315-1.014-2.232-3.836c0.017-0.588,0.095-0.899,0.151-1.05c0.192,0.092,0.486,0.311,0.686,0.521
   c0.377,0.403,1.01,0.423,1.414,0.047c0.403-0.377,0.424-1.01,0.047-1.414c-0.252-0.269-1.572-1.589-2.891-1.088
   c-1.335,0.504-1.389,2.325-1.406,2.924C19.679,25.967,21.477,27.712,22.81,28.413z M24.92,29.009l1.998,0.438l0.589,5.339
   C26.295,33.365,25.331,31.47,24.92,29.009z M42.097,34.785l0.589-5.339l1.998-0.438C44.273,31.47,43.309,33.365,42.097,34.785z
    M40.667,29.515l-0.795,7.198c-0.002,0.017,0.005,0.032,0.004,0.048c-1.835,1.225-3.776,1.722-5.074,1.722
   c-1.296,0-3.232-0.496-5.064-1.716l-0.8-7.252C32.833,29.149,36.77,29.149,40.667,29.515z M29.438,42.722l-2.902,1.362l-0.255-4.656
   c-0.03-0.552-0.509-0.976-1.053-0.944c-0.551,0.03-0.974,0.502-0.944,1.053l0.053,0.972c-3.428,1.238-6.537,3.485-8.878,6.368
   c-0.137-0.803-0.428-1.572-1.058-2.206c-0.255-0.257-0.565-0.466-0.905-0.648v-7.55c0.279,0.079,0.586,0.216,0.861,0.458
   c0.67,0.587,1.009,1.63,1.009,3.101V43.2c0,0.552,0.448,1,1,1s1-0.448,1-1v-3.167c0-2.072-0.569-3.621-1.691-4.604
   c-0.728-0.638-1.544-0.897-2.185-0.996c-0.016-0.538-0.452-0.971-0.994-0.971H1c-0.552,0-1,0.448-1,1V37.5c0,0.552,0.448,1,1,1h3.09
   c0.14,1.476,0.632,4.212,2.33,5.737c-0.201,0.135-0.402,0.269-0.568,0.436c-1.194,1.201-1.185,2.886-1.177,4.372l0.001,6.94
   c0,1.83,0.909,3.448,2.297,4.437c-0.578,0.87-1.148,1.603-1.145,1.603c-3.024,3.302-2.698,9.679-2.683,9.949
   c0.03,0.529,0.468,0.943,0.999,0.943h13.131c0.53,0,0.968-0.414,0.999-0.943c0.015-0.27,0.341-6.648-2.662-9.925
   c-0.011-0.013-0.945-1.112-1.641-2.204c0.992-0.987,1.606-2.353,1.606-3.86l0.001-5.84c2.064-3.39,5.257-6.083,8.874-7.535
   l0.168,3.065c0.018,0.332,0.2,0.633,0.485,0.804c0.158,0.094,0.335,0.142,0.513,0.142c0.145,0,0.29-0.031,0.425-0.095l4.245-1.992
   c0.5-0.235,0.715-0.83,0.48-1.33C30.533,42.702,29.937,42.489,29.438,42.722z M2,35.461h1.13V36.5H2V35.461z M9.391,43.338
   c-3.29,0-3.357-5.784-3.357-5.842C6.03,36.98,5.633,36.57,5.13,36.519v-1.059h6.366v7.879l-1.361-0.001c-0.003,0-0.006,0-0.009,0
   c-0.003,0-0.005,0-0.008,0L9.391,43.338z M6.675,49.034c-0.006-1.203-0.013-2.34,0.595-2.951c0.49-0.493,1.448-0.743,2.845-0.744
   l0.024,0c1.397,0.002,2.355,0.251,2.844,0.744c0.406,0.409,0.536,1.054,0.577,1.795h-2.325c-0.552,0-1,0.448-1,1s0.448,1,1,1h2.343
   l0,1.821h-2.343c-0.552,0-1,0.448-1,1s0.448,1,1,1h2.342l0,1.688h-2.342c-0.552,0-1,0.448-1,1s0.448,1,1,1h2.037
   c-0.539,1.204-1.743,2.047-3.145,2.047c-1.902,0-3.45-1.548-3.45-3.45L6.675,49.034z M5.133,70.917
   c0.007-0.393,0.031-0.897,0.079-1.451h10.995c0.048,0.553,0.071,1.058,0.078,1.451H5.133z M14.115,63.374
   c0.974,1.063,1.509,2.608,1.808,4.091H5.501c0.305-1.494,0.853-3.057,1.852-4.149c0.037-0.047,0.767-0.981,1.456-2.049
   c0.423,0.105,0.862,0.168,1.317,0.168c0.78,0,1.52-0.167,2.191-0.464C13.089,62.17,14.047,63.296,14.115,63.374z M21.2,16.754v1.046
   c0,0.552,0.448,1,1,1s1-0.448,1-1v-1.37c2.995-1.182,7.331-2.308,11.602-2.308c4.271,0,8.607,1.126,11.602,2.308v1.37
   c0,0.552,0.448,1,1,1s1-0.448,1-1v-1.046c0.266-0.186,0.428-0.489,0.428-0.815V5.24c0-0.395-0.232-0.753-0.594-0.914
   c-3.156-1.404-8.343-2.904-13.436-2.904c-5.094,0-10.281,1.5-13.436,2.904c-0.361,0.161-0.594,0.519-0.594,0.914v10.698
   C20.772,16.264,20.935,16.567,21.2,16.754z M22.772,5.9c2.999-1.241,7.556-2.477,12.03-2.477c4.474,0,9.03,1.236,12.03,2.477v8.546
   c-3.169-1.208-7.635-2.325-12.03-2.325c-4.396,0-8.86,1.117-12.03,2.325V5.9z M73.34,32.94h-25.23c-0.552,0-1,0.448-1,1v3.523
   c0,0.552,0.448,1,1,1h2.335l9.721,6.916v9.426c-1.676,0.08-2.913,0.494-3.715,1.301c-1.194,1.201-1.185,2.886-1.177,4.372
   l0.001,6.94c0,3.005,2.445,5.45,5.45,5.45s5.45-2.445,5.45-5.45l0.001-6.94c0.008-1.486,0.017-3.171-1.177-4.372
   c-0.658-0.662-1.595-1.068-2.833-1.239v-9.516c4.234-3.308,7.866-6.118,8.861-6.888h2.313c0.552,0,1-0.448,1-1V33.94
   C74.34,33.387,73.892,32.94,73.34,32.94z M64.176,60.468l-0.001,6.951c0,1.902-1.548,3.45-3.45,3.45
   c-1.402,0-2.606-0.844-3.145-2.047h2.037c0.552,0,1-0.448,1-1s-0.448-1-1-1h-2.342l0-1.688h2.342c0.552,0,1-0.448,1-1s-0.448-1-1-1
   h-2.343l0-1.821h2.343c0.552,0,1-0.448,1-1s-0.448-1-1-1h-2.325c0.041-0.741,0.171-1.386,0.577-1.795
   c0.491-0.494,1.453-0.745,2.856-0.745s2.365,0.25,2.856,0.745C64.189,58.128,64.183,59.264,64.176,60.468z M72.34,36.463h-1.654
   c-0.221,0-0.436,0.073-0.611,0.208c0,0-4.039,3.119-8.937,6.944l-9.794-6.968c-0.169-0.12-0.372-0.185-0.58-0.185h-1.654V34.94
   h23.23V36.463z M45.023,42.462l-0.176,3.212c-0.018,0.332-0.2,0.633-0.485,0.804c-0.158,0.094-0.335,0.142-0.513,0.142
   c-0.145,0-0.29-0.031-0.425-0.095l-4.245-1.992c-0.5-0.235-0.715-0.83-0.48-1.33c0.234-0.501,0.831-0.715,1.33-0.48l2.902,1.362
   l0.255-4.656c0.03-0.552,0.502-0.974,1.053-0.944c0.551,0.03,0.974,0.502,0.944,1.053l-0.046,0.835
   c5.806,1.963,10.629,6.745,12.592,12.492c0.179,0.522-0.101,1.091-0.623,1.27c-0.107,0.037-0.216,0.054-0.323,0.054
   c-0.416,0-0.804-0.262-0.946-0.677C54.129,48.515,50.015,44.334,45.023,42.462z M35.802,47.247v24.44c0,0.552-0.448,1-1,1
   s-1-0.448-1-1v-24.44c0-0.552,0.448-1,1-1S35.802,46.695,35.802,47.247z M48.725,30.049h24c0.552,0,1,0.448,1,1s-0.448,1-1,1h-24
   c-0.552,0-1-0.448-1-1S48.172,30.049,48.725,30.049z"
            />
        </svg>
    ),
    caretaker: (props) => (
        <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 21V18.5C4 15.4624 6.46243 13 9.5 13H13.5M8 21V18M16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79086 10.5 8 8.70914 8 6.5C8 4.29086 9.79086 2.5 12 2.5C14.2091 2.5 16 4.29086 16 6.5ZM17.5 12.9998C17.0439 12.3927 16.3178 12 15.5 12C14.1193 12 13 13.1193 13 14.5C13 15.1195 13.2253 15.6864 13.5985 16.1231L17.5 21L21.4015 16.1231C21.7747 15.6864 22 15.1195 22 14.5C22 13.1193 20.8807 12 19.5 12C18.6822 12 17.9561 12.3927 17.5 12.9998Z"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
            />
        </svg>
    ),
    tutoring: (props) => (
        <svg
            fill="#000000"
            width="50px"
            height="50px"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M227.79492,52.61621l-96-32a11.98464,11.98464,0,0,0-7.58984,0L28.44678,52.53564l-.05078.01685-.19092.06372c-.17383.05786-.34107.12793-.51074.19312-.20118.07739-.40052.15722-.5962.24487-.24487.10962-.48706.22339-.72216.34814-.11817.06275-.23181.13233-.34766.199-.199.11426-.39526.23144-.58618.3562-.10938.07153-.21655.14551-.32361.2207q-.295.20655-.575.42993c-.09009.07154-.18091.14185-.26892.21607q-.33453.282-.64575.58691c-.04444.04346-.09192.0835-.13575.12744q-.37243.375-.70947.78077c-.06335.07592-.12109.15625-.18249.23364-.15516.1958-.30579.39453-.44837.59961-.07861.11279-.15332.22778-.228.34326q-.175.271-.33483.55127c-.07264.12671-.14551.25268-.21363.38257-.10583.20166-.20251.40844-.297.61645-.05225.115-.10987.22657-.15845.34351-.12842.30835-.24243.62353-.34522.94311-.04187.13086-.07544.2649-.113.39746-.06128.21656-.1189.43384-.16822.65455-.03125.14062-.05908.28222-.08545.4248-.04345.23462-.07861.47119-.10839.71-.01526.124-.03321.24732-.04468.37256C20.02209,63.2583,20,63.627,20,64v80a12,12,0,0,0,24,0V80.64868l23.7146,7.905a67.90093,67.90093,0,0,0,18.11377,84.73047,99.97006,99.97006,0,0,0-41.64819,36.16016,12.00007,12.00007,0,0,0,20.10351,13.10937,76.02217,76.02217,0,0,1,127.43213,0,12.00007,12.00007,0,0,0,20.10352-13.10937,99.97238,99.97238,0,0,0-41.64783-36.16016A67.9008,67.9008,0,0,0,188.2854,88.55371l39.50952-13.16992a11.99952,11.99952,0,0,0,0-22.76758ZM128,44.64941,186.05273,64l-20.70739,6.90234-.03272.011L128,83.35059,90.68677,70.91309l-.02844-.00953L69.94727,64ZM172,120A44,44,0,1,1,90.93738,96.29443l33.2677,11.08936a11.99358,11.99358,0,0,0,7.58984,0l33.2677-11.08936A43.87528,43.87528,0,0,1,172,120Z" />
        </svg>
    ),
    invoice: (props) => {
        if (props.isFilled)
            return (
                <svg
                    width="44px"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M18,2H6A2,2,0,0,0,4,4V22l3-3,2,3,3-3,3,3,2-3,3,3V4A2,2,0,0,0,18,2ZM12,16H8a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Zm0-4H8a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Zm4,4H15a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Zm0-4H15a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Zm0-5H8A1,1,0,0,1,8,5h8a1,1,0,0,1,0,2Z" />
                </svg>
            );
        return (
            <svg
                width="40px"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M18,1H6A3,3,0,0,0,3,4V22a1,1,0,0,0,1.707.707L6.845,20.57l1.323,1.984A1,1,0,0,0,8.9,23a.986.986,0,0,0,.806-.288L12,20.414l2.293,2.293a1,1,0,0,0,1.539-.153l1.323-1.984,2.138,2.137A1,1,0,0,0,21,22V4A3,3,0,0,0,18,1Zm1,18.586-1.293-1.293a.984.984,0,0,0-.806-.288,1,1,0,0,0-.733.44L14.845,20.43l-2.138-2.137a1,1,0,0,0-1.414,0L9.155,20.43,7.832,18.445a1,1,0,0,0-1.539-.152L5,19.586V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1ZM13,11a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h4A1,1,0,0,1,13,11Zm0,4a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h4A1,1,0,0,1,13,15Zm4-4a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h1A1,1,0,0,1,17,11Zm0,4a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h1A1,1,0,0,1,17,15Zm0-9a1,1,0,0,1-1,1H8A1,1,0,0,1,8,5h8A1,1,0,0,1,17,6Z" />
            </svg>
        );
    },
};
