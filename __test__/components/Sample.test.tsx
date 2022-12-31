import { render, screen, fireEvent } from '@testing-library/react';
import { Sample } from '@/components/Sample';

describe('Sample', () => {
  describe('初期表示', () => {
    test('DOMのテキストがSampleになっている', () => {
      render(<Sample />);
      const text = screen.getByText('Sample');
      expect(text).toBeInTheDocument();
    });
  });
});