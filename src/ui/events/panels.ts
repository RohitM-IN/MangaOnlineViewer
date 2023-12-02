import { keybindEditor, keybindList } from '../components/KeybindingsPanel';
import { getUserSettings, updateSettings } from '../../core/settings';
import { isNothing } from '../../utils/checks';
import keybindings from './keybindings';

function buttonHeaderClick() {
  const header = document.querySelector('#Header');
  if (header?.classList.contains('click')) {
    header?.classList.toggle('visible');
  }
}

function buttonHeaderMouseOver() {
  const header = document.querySelector('#Header');
  if (header?.classList.contains('hover')) {
    header?.classList.add('visible');
    document.querySelector('#menu')?.classList.add('hide');
  }
}

function buttonHeaderMouseOut() {
  const header = document.querySelector('#Header');
  if (header?.classList.contains('hover')) {
    header?.classList.remove('visible');
    document.querySelector('#menu')?.classList.remove('hide');
  }
}

export function buttonSettingsOpen() {
  document.querySelector('#SettingsPanel')?.classList.add('visible');
  document.querySelector('#Navigation')?.classList.add('visible');
  document.querySelector('#Header')?.classList.add('visible');
  document.querySelector('#Overlay')?.classList.add('visible');
}

export function buttonSettingsClose() {
  document.querySelector('#SettingsPanel')?.classList.remove('visible');
  document.querySelector('#Navigation')?.classList.remove('visible');
  document.querySelector('#Header')?.classList.remove('visible');
  document.querySelector('#Overlay')?.classList.remove('visible');
}

export function buttonKeybindingsOpen() {
  document.querySelector('#KeybindingsList')!.innerHTML = keybindList().join('\n');
  document.querySelector('#SaveKeybindings')?.classList.add('hidden');
  document.querySelector('#EditKeybindings')?.classList.remove('hidden');
  document.querySelector('#KeybindingsPanel')?.classList.add('visible');
  document.querySelector('#Overlay')?.classList.add('visible');
}

export function buttonKeybindingsClose() {
  document.querySelector('#SaveKeybindings')?.classList.add('hidden');
  document.querySelector('#EditKeybindings')?.classList.remove('hidden');
  document.querySelector('#KeybindingsPanel')?.classList.remove('visible');
  document.querySelector('#Overlay')?.classList.remove('visible');
}

export function saveKeybindings() {
  const newkeybinds: Record<string, string[] | undefined> = getUserSettings().keybinds;
  Object.keys(getUserSettings().keybinds).forEach((kb) => {
    const keys = document
      .querySelector<HTMLInputElement>(`#${kb}`)
      ?.value.split(',')
      ?.map((value) => value.trim());
    newkeybinds[kb] = isNothing(keys) ? undefined : keys;
  });
  updateSettings({ keybinds: newkeybinds });
  document.querySelector('#KeybindingsList')!.innerHTML = keybindList().join('\n');
  document.querySelector('#SaveKeybindings')?.classList.add('hidden');
  document.querySelector('#EditKeybindings')?.classList.remove('hidden');
  keybindings();
}

export function editKeybindings() {
  document.querySelector('#KeybindingsList')!.innerHTML = keybindEditor().join('\n');
  document.querySelector('#SaveKeybindings')?.classList.remove('hidden');
  document.querySelector('#EditKeybindings')?.classList.add('hidden');
}

function panels() {
  // Show Header list
  document.querySelector('#menu')?.addEventListener('click', buttonHeaderClick);
  document.querySelector('#menu')?.addEventListener('mouseover', buttonHeaderMouseOver);
  document.querySelector('#Header')?.addEventListener('mouseout', buttonHeaderMouseOut);
  // Settings Control
  document.querySelector('#settings')?.addEventListener('click', buttonSettingsOpen);
  document.querySelector('#CloseSettings')?.addEventListener('click', buttonSettingsClose);
  document.querySelector('#Overlay')?.addEventListener('click', buttonSettingsClose);
  // Keybindings list
  document.querySelector('#keybindings')?.addEventListener('click', buttonKeybindingsOpen);
  document.querySelector('#CloseKeybindings')?.addEventListener('click', buttonKeybindingsClose);
  document.querySelector('#Overlay')?.addEventListener('click', buttonKeybindingsClose);
  document.querySelector('#EditKeybindings')?.addEventListener('click', editKeybindings);
  document.querySelector('#SaveKeybindings')?.addEventListener('click', saveKeybindings);
}

export default panels;
