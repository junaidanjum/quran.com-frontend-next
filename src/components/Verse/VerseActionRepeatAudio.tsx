import useTranslation from 'next-translate/useTranslation';

import IconContainer, { IconColor, IconSize } from '@/dls/IconContainer/IconContainer';
import PopoverMenu from '@/dls/PopoverMenu/PopoverMenu';
import RepeatIcon from '@/icons/repeat-new.svg';
import { logButtonClick } from '@/utils/eventLogger';

type VerseActionRepeatAudioProps = {
  isTranslationView: boolean;
  onActionTriggered?: () => void;
  onRepeatClick: () => void;
};
const VerseActionRepeatAudio = ({
  isTranslationView,
  onActionTriggered,
  onRepeatClick,
}: VerseActionRepeatAudioProps) => {
  const { t } = useTranslation('common');

  const onItemClicked = () => {
    if (isTranslationView) {
      logButtonClick('translation_view_verse_actions_menu_repeat');
    } else {
      logButtonClick('reading_view_verse_actions_menu_repeat');
    }
    onRepeatClick();
    onActionTriggered?.();
  };

  return (
    <PopoverMenu.Item
      icon={
        <IconContainer
          icon={<RepeatIcon />}
          color={IconColor.tertiary}
          size={IconSize.Custom}
          shouldFlipOnRTL={false}
        />
      }
      onClick={onItemClicked}
    >
      {t('audio.player.repeat-1-verse')}
    </PopoverMenu.Item>
  );
};

export default VerseActionRepeatAudio;
