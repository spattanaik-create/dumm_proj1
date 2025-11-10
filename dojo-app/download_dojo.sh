#!/bin/bash
# This script downloads and extracts the Dojo Toolkit version 1.9.3

# Directory to store the dojo library
DOJO_DIR="dojo"

# Dojo download URL
DOJO_URL="https://download.dojotoolkit.org/release-1.9.3/dojo-release-1.9.3.zip"
DOJO_ZIP="dojo-release-1.9.3.zip"

# Create the dojo directory if it doesn't exist
mkdir -p $DOJO_DIR

# Download dojo
echo "Downloading Dojo..."
curl -L -o "$DOJO_DIR/$DOJO_ZIP" "$DOJO_URL"

# Unzip dojo
echo "Unzipping Dojo..."
unzip -q "$DOJO_DIR/$DOJO_ZIP" -d "$DOJO_DIR"

# Clean up the zip file
rm "$DOJO_DIR/$DOJO_ZIP"

echo "Dojo 1.9.3 has been downloaded and extracted to the '$DOJO_DIR' directory."
