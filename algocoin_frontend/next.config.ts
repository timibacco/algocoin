import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = (phase: string, { defaultConfig }: { defaultConfig: any }) => {
    return {
        ...defaultConfig,

        webpack: (config: Configuration) => {
            config.resolve = {
                ...config.resolve,
                fallback: {
                    "fs": false,
                    "path": false,
                    "os": false,
                }
            }
            return config;
        },
    };
};

export default nextConfig;