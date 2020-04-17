/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

// / <reference path="theia.d.ts" />

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext): void {
    theia.commands.registerCommand({
        id: 'my-command-id',
        label: 'My Command'
    }, () => {
        theia.window.showInformationMessage('some message');
    });

    const lookup = new RegExp('{SHOULD_BE_SELECTED}(.*){\/SHOULD_BE_SELECTED}');

    const disposable = theia.languages.registerSelectionRangeProvider('*', {
        provideSelectionRanges: (document, positions) => {
            const result: theia.SelectionRange[] = [];

            for (const position of positions) {
                const range = document.getWordRangeAtPosition(position, lookup);

                if (!range) { continue; }

                if (range.start.character <= position.character && range.end.character >= position.character) {
                    result.push({
                        range: new theia.Range(
                            new theia.Position(range.start.line, range.start.character + 20),
                            new theia.Position(range.end.line, range.end.character - 21)
                        )
                    });
                }
            }

            return result;
        }
    });
    context.subscriptions.push(disposable);
}

export function stop(): void {
}
