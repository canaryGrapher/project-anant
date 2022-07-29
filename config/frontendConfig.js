import ThirdPartyReact from 'supertokens-auth-react/recipe/thirdparty'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'

export const frontendConfig = () => {
    return {
        appInfo,
        recipeList: [
            ThirdPartyReact.init({
                getRedirectionURL: async (context) => {
                    if (context.action === "SUCCESS") {
                        if (context.redirectToPath !== undefined) {
                            // we are navigating back to where the user was before they authenticated
                            return context.redirectToPath;
                        }
                        return "/";
                    }
                    return undefined;
                },
                signInAndUpFeature: {
                    providers: [
                        ThirdPartyReact.Google.init(),
                        ThirdPartyReact.Github.init(),
                        ThirdPartyReact.Apple.init(),
                    ],
                },
            }),
            SessionReact.init(),
        ],
    }
}